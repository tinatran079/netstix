from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel
from queries.reviews import ReviewQueries
from authenticator import authenticator


router = APIRouter()

class Review(BaseModel):
    id: int
    subject: str
    description: str
    account_id: int
    game_id: int
    game_title: str

class ReviewIn(BaseModel):
    subject: str
    description: str
    account_id: int
    game_id: int
    game_title: str

class ReviewOut(BaseModel):
    id: int
    subject: str
    description: str
    account_id: int
    game_id: int
    game_title: str

class ReviewsOut(BaseModel):
    reviews: list[ReviewOut]

@router.post("/api/reviews", response_model=ReviewOut)
def create_review(
    review: ReviewIn,
    queries: ReviewQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return queries.create_review(review)

@router.get("/api/reviews", response_model=ReviewsOut)
def get_reviews(
    queries: ReviewQueries = Depends(),
):
    return {
        "reviews": queries.get_reviews()
    }

@router.delete("/api/reviews/{review_id}", response_model=bool)
def delete_review(
    review_id: int,
    queries: ReviewQueries = Depends(),
):
    queries.delete_review(review_id)
    return True
