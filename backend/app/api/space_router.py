from fastapi import APIRouter, Depends, HTTPException

from app.models.database import SessionLocal


space_router = APIRouter(
    prefix='/space',
    tags=['space'],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()