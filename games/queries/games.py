import requests
import os

class games_queries:
    def get_all_games(self):
        key = os.environ['API_KEY']
        res = requests.get(f'https://api.rawg.io/api/games?key={key}')
        return res.json()