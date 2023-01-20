from fastapi import APIRouter, Depends, Response
from queries.games import GamesQueries
from typing import Union

router = APIRouter()

@router.get('/api/games/{game_id}')
def get_game(
    game_id: int,
    response: Response,
    queries: GamesQueries = Depends(),
):
    data = queries.get_game_by_id(game_id)
    if data is None:
        response.status_code=404
    else:
        return data

@router.get('/api/games')
def get_games(
    response: Response,
    queries: GamesQueries = Depends(),
    search: Union[str, None] = None,
):
    if search is not None:
        data = queries.get_games_by_search(search)
        if data is None:
            response.status_code=404
        else:
            return data
    else:
        data = queries.get_all_games()
        if data is None:
            response.status_code=404
        else:
            return data
