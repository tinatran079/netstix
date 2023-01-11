from fastapi import APIRouter, Depends

from queries.games import UserQueries
from pydantic import BaseModel


router = APIRouter()

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

class UsersOut(BaseModel):
    users: list[UserOut]

@router.post("/api/users", response_model=UserOut)
def create_user(
    user: UserIn,
    queries: UserQueries = Depends()
):
    return queries.create(user)

@router.get("/api/users", response_model=UsersOut)
def get_users(
    queries: UserQueries = Depends(),
):
    return {
        "users": queries.get_users()
    }

# @router.get("/users/{id}")
