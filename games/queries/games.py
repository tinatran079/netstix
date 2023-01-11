from fastapi import FastAPI
import os
from pydantic import BaseModel
from psycopg_pool import ConnectionPool
conninfo = os.environ["DATABASE_URL"]
pool = ConnectionPool(conninfo=conninfo)

def connect_to_db():
    conninfo = os.environ["DATABASE_URL"]
    pool = ConnectionPool(conninfo=conninfo)
    return pool

class User(BaseModel):
    id: int
    username: str
    password: str
    email: str

class UserIn(BaseModel):
    username: str
    password: str
    email: str

class UserOut(BaseModel):
    id: int

class UserRepository:
    def create(self, user: UserIn):
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
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
                    row = db.fetchone()
                    data = {}
                    for i, col in enumerate(db.description):
                        data[col.name] = row[i]
                    id = data['id']

                    return (f'user created successfully at id {id}')
