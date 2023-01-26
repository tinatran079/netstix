from fastapi.testclient import TestClient
from queries.reviews import ReviewQueries
from routers.reviews import ReviewIn, ReviewOut
from main import app
import json

client = TestClient(app=app)

class ReviewQueriesMock:
    def get_reviews(self):
        return []

    def create_review(self, review: ReviewIn) -> ReviewOut:
        review_dict = review.dict()
        return ReviewOut(id = 1, **review.dict())

def test_get_reviews():
    # Arrange
    app.dependency_overrides[ReviewQueries] = ReviewQueriesMock

    # Act
    res = client.get('/api/reviews')

    # Assert
    assert res.status_code == 200
    assert res.json() == {'reviews': []}

    # Cleanup
    app.dependency_overrides = {}


def test_create_reviews_protection():
    # Arrange
    app.dependency_overrides[ReviewQueries] = ReviewQueriesMock
    review_body = {
        "subject": "awesome",
        "description": "boy! do I love this",
        "account_id": 1,
        "game_id": 300,
        "game_title": "the best game ever",
        "username": "gamer11",

    }

    # Act
    res = client.post('/api/reviews', json.dumps(review_body))

   # Assert
    assert res.status_code == 401


  # Cleanup
    app.dependency_overrides = {}
