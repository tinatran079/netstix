from fastapi import APIRouter, Depends
from queries.games import UserIn, UserRepository


router = APIRouter()


@router.post("/users")
def create_user(
    user: UserIn,
    repo: UserRepository.create = Depends()
):
    return repo.create(user)
