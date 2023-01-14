import requests
import os

class games_queries:
    def get_all_games(self):
        key = os.environ['API_KEY']
        res = requests.get(f'https://api.rawg.io/api/games?key={key}')
        return res.json()

    def get_games_by_search(self,):
        key = os.environ['API_KEY']
        params ={
            'key': key,
            'search': 'AMONG US'
        }
        res = requests.get(f'https://api.rawg.io/api/games',params=params)
        return res.json()
