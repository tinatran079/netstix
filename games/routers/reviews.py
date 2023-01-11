from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel
from queries.reviews import ReviewQueries

router = APIRouter()

class Review(BaseModel):
    id: int
    subject: str
    description: str
    user_id: int

class ReviewIn(BaseModel):
    subject: str
    description: str
    user_id: int

class ReviewOut(BaseModel):
    id: int
    subject: str
    description: str
    user_id: int

@router.post("/api/reviews", response_model=ReviewOut)
def create_review(
    review: ReviewIn,
    queries: ReviewQueries = Depends()
):
    return queries.create_review(review)
