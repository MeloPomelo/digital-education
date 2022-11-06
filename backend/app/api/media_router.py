from fastapi import APIRouter, Depends, HTTPException

from app.models.database import SessionLocal


media_router = APIRouter(
    prefix='/media',
    tags=['media'],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()