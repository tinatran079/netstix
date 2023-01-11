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
                    RETURNING id
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
                    id = data['id']

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
                    print(users)

                    return users
