from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import reviews, games, accounts
import os
from fastapi import APIRouter
from authenticator import authenticator

app = FastAPI()
app.include_router(accounts.router)
app.include_router(reviews.router)
app.include_router(games.router)
app.include_router(authenticator.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
