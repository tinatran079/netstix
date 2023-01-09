from fastapi import APIRouter
from queries.games import UserIn


router = APIRouter()


@router.post("/users")
def create_user(Users: UserIn):
    print ('users', Users)
    return Users
