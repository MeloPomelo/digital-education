from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from config import settings
from app.api.dependencies.db import get_db

from app.models.user_model import User
from app.schemas import user_schema as user_schemas
from app.crud import user_crud as crud


ACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES

user_router = APIRouter(
    prefix='/users',
    tags=['users'],
)


@user_router.post("/registration", response_model=user_schemas.User)
async def user_registration(user: user_schemas.UserCreate, db: Session = Depends(get_db)):
    exist_user = crud.get_user(db=db, username=user.username)
    if exist_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="This username already exist"
        )

    return crud.create_user(db=db, user=user)


@user_router.post("/login", response_model=user_schemas.Token)
async def login_for_access_token(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = crud.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = crud.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@user_router.get("/me", response_model=user_schemas.User)
async def read_users_me(current_user: User = Depends(crud.get_current_user)):
    return current_user
