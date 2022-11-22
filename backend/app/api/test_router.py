from fastapi import APIRouter, Depends, HTTPException

from app.api.dependencies.auth_check import AuthCheck
from app.api.dependencies.db import get_db
from app.domains.role import Role


test_router = APIRouter(
    prefix='/test',
    tags=['test'],
    dependencies=[Depends(AuthCheck('All'))]
)

