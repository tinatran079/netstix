from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import users, reviews, games
import os
from fastapi import APIRouter

app = FastAPI()
app.include_router(users.router)
app.include_router(reviews.router)
app.include_router(games.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


