from fastapi import APIRouter, Depends, Response

router = APIRouter()


@router.get("/games", response_model=Union[List[GamesOut], Error])
def get_all(
    repo: GameRepository = Depends(),
):
    return repo.get_all()
