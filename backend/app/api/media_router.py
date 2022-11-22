from fastapi import APIRouter, Depends, HTTPException

from app.api.dependencies.auth_check import AuthCheck
from app.api.dependencies.db import get_db
from app.domains.role import Role


media_router = APIRouter(
    prefix='/media',
    tags=['media'],
    dependencies=[Depends(AuthCheck('All'))]
)


