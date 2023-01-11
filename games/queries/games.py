from fastapi import FastAPI
import os
from psycopg_pool import ConnectionPool
# from routers.games import User, UserIn, UserOut, UsersOut
conninfo = os.environ["DATABASE_URL"]
pool = ConnectionPool(conninfo=conninfo)



def connect_to_db():
    conninfo = os.environ["DATABASE_URL"]
    pool = ConnectionPool(conninfo=conninfo)
    return pool

class UserQueries:
    def create(self, user):
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                    """
                    INSERT INTO Users
                        (username, password, email)
                    VALUES
                        (%s,%s,%s)
                    RETURNING id, username, email
                    """,
                    [
                        user.username,
                        user.password,
                        user.email,
                    ]
                )
                    data = {}
                    row = db.fetchone()
                    for i, col in enumerate(db.description):
                        data[col.name] = row[i]
                    return data
    def get_user(self, id,):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id, username, email
                    FROM Users
                    WHERE id = %s
                    """,
                        [id],
                )
                data = None
                row = db.fetchone()
                if row is not None:
                    data = {}
                    for i, col in enumerate(db.description):
                        data[col.name] = row[i]
                return data


    def get_users(self):
        with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id, username, email
                        FROM Users
                        ORDER BY id
                        """
                    )

                    users = []
                    for row in db.fetchall():
                        data = {}
                        for i, col in enumerate(db.description):
                            data[col.name] = row[i]
                        users.append(data)

                    return users

    def delete_user(self, user_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM Users
                    WHERE id = %s
                    """,
                    [user_id],
                )


    def update_user(self, user_id, data):
        with pool.connection() as conn:
            with conn.cursor() as db:
                params = [
                    data.username,
                    data.password,
                    data.email,
                    user_id,
                ]
                db.execute(
                    """
                    UPDATE Users
                    SET username = %s
                    , password = %s
                    , email = %s
                    WHERE id = %s
                    RETURNING id, username, email
                    """,
                    params,
                )
                record = None
                row = db.fetchone()
                if row is not None:
                    record = {}
                    for i, col in enumerate(db.description):
                        record[col.name] = row[i]
                return record
