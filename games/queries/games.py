from fastapi import FastAPI
from pydantic import BaseModel
from queries.pool import pool

class UserIn(BaseModel):
    username: str
    password: str
    email: str

class UserOut(UserIn):
    id: int

class UserRepository:
    def create(self, user: UserIn) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as postgres:
                result = postgres.execute(
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
            id = result.fetchone()[0]
            old_data = user.dict()
            return UserOut(id=id, **old_data)
