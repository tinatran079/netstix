from fastapi.testclient import TestClient
from queries.reviews import ReviewQueries
from main import app

client = TestClient(app=app)

class ReviewQueriesMock:
    def get_reviews(self):
        return []

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
