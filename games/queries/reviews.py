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
                    (subject, description, account_id, game_id, game_title, username)
                VALUES
                    (%s,%s,%s,%s,%s,%s)
                RETURNING id, subject, description, account_id, game_id, game_title, username
                """,
                    [
                        review.subject,
                        review.description,
                        review.account_id,
                        review.game_id,
                        review.game_title,
                        review.username
                    ],
                )
                record = None
                row = db.fetchone()
                if row is not None:
                    record = {}
                    for i, col in enumerate(db.description):
                        record[col.name] = row[i]
                return record

    def get_reviews(self):
        with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id, subject, description, account_id, game_id, game_title, username
                        FROM Reviews
                        ORDER BY id
                        """
                    )

                    reviews = []
                    for row in db.fetchall():
                        data = {}
                        for i, col in enumerate(db.description):
                            data[col.name] = row[i]
                        reviews.append(data)

                    return reviews

    def delete_review(self, review_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM Reviews
                    WHERE id = %s
                    """,
                    [review_id],
                )
