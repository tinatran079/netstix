from fastapi import APIRouter, Depends
from queries.games import games_queries

router = APIRouter()

@router.get('/api/games')
def get_games(repo: games_queries = Depends()):
    return repo.get_all_games()