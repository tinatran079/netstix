from fastapi import FastAPI
import os
from psycopg_pool import ConnectionPool
conninfo = os.environ["DATABASE_URL"]
pool = ConnectionPool(conninfo=conninfo)


def connect_to_db():
    conninfo = os.environ["DATABASE_URL"]
    pool = ConnectionPool(conninfo=conninfo)
    return pool


class ReviewQueries:
    def create_review(self, review):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                """
                INSERT INTO Reviews
                    (subject, description, user_id)
                VALUES
                    (%s,%s,%s)
                RETURNING id, subject, description, user_id
                """,
                    [
                        review.subject,
                        review.description,
                        review.user_id,
                    ],
                )
                record = None
                row = db.fetchone()
                if row is not None:
                    record = {}
                    for i, col in enumerate(db.description):
                        record[col.name] = row[i]
                return record
