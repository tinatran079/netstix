import requests
import os


class GamesQueries:
    def get_game_by_id(self, id):
        key = os.environ["API_KEY"]
        res = requests.get(f"https://api.rawg.io/api/games/{id}?key={key}")
        return res.json()

    def get_screenshots_by_id(self, id):
        key = os.environ["API_KEY"]
        res = requests.get(
            f"https://api.rawg.io/api/games/{id}/screenshots?key={key}"
        )
        return res.json()

    def get_all_games(self):
        key = os.environ["API_KEY"]
        res = requests.get(f"https://api.rawg.io/api/games?key={key}")
        return res.json()

    def get_games_by_search(self, search):
        key = os.environ["API_KEY"]
        params = {
            "key": key,
            "search": search,
        }
        res = requests.get(f"https://api.rawg.io/api/games", params=params)
        return res.json()

    def get_all_genres(self):
        key = os.environ["API_KEY"]
        res = requests.get(f"https://api.rawg.io/api/genres?key={key}")
        return res.json()

    def get_games_by_genre(self, id):
        key = os.environ["API_KEY"]
        res = requests.get(f"https://api.rawg.io/api/games?key={key}&genres={id}")
        if res.status_code == 200:
            return res.json()
        else:
            return None
