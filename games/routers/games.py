from fastapi import APIRouter, Depends
from queries.games import UserIn, UserRepository


router = APIRouter()


@router.post("/users")
def create_user(
    Users: UserIn,
    repo:UserRepository = Depends()
):
    return repo.create(Users)
