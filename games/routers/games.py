from fastapi import APIRouter, Depends
from queries.games import games_queries

router = APIRouter()

@router.get('/api/games/id')
def get_games(repo: games_queries = Depends()):
    return repo.get_all_games()
@router.get('/api/games')
def get_games_by_search(repo: games_queries = Depends()):
    return repo.get_games_by_search()
