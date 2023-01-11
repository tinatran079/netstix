from fastapi import APIRouter, Depends, Response

from queries.users import UserQueries
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
    username: str
    email: str

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

@router.get("/api/users/{user_id}", response_model=UserOut)
def get_user(
    user_id: int,
    response: Response,
    queries: UserQueries = Depends(),
):
    data = queries.get_user(user_id)
    if data is None:
        response.status_code=404
    else:
        print(data)
        return data

@router.delete("/api/users/{user_id}", response_model=bool)
def delete_user(
    user_id: int,
    queries: UserQueries = Depends(),
):
    queries.delete_user(user_id)
    return True

@router.put("/api/users/{user_id}", response_model=UserOut)
def update_user(
    user_id: int,
    user_in: UserIn,
    response: Response,
    queries: UserQueries = Depends(),
):
    data = queries.update_user(user_id, user_in)
    if data is None:
        response.status_code = 404
    else:
        return data
