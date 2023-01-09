from fastapi import FastAPI
from pydantic import BaseModel

class UserIn(BaseModel):
    username: str
    password: str
    email: str
