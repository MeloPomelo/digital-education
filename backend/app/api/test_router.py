from fastapi import APIRouter, Depends, HTTPException

from app.models.database import SessionLocal


test_router = APIRouter(
    prefix='/test',
    tags=['test'],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

