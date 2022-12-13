from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import json


from app.api.dependencies.auth_check import AuthCheck
from app.api.dependencies.db import get_db
from app.domains.role import Role

from app.schemas.test_schema import TestCreate
from app.crud import test_crud

# test_router = APIRouter(
#     prefix='/test',
#     tags=['test'],
#     dependencies=[Depends(AuthCheck('All'))]
# )
#
#
# @test_router.post("/add_test", response_model=TestCreate)
# def create_test(test: TestCreate, module_id: int, db: Session = Depends(get_db)):
#     db_test = test_crud.create_test(db, test=test, module_id=module_id)
#     return db_test
#
#
# @test_router.delete("/delete_test", response_model=dict)
# def delete_test(test_id: int, db: Session = Depends(get_db)):
#     db_test = test_crud.get_test(db, test_id=test_id)
#     if db_test is None:
#         raise HTTPException(status_code=404, detail="Test not found")
#     test_crud.delete_test(db, test_id)
#     return {
#         'test_id': test_id,
#         'status': 'delete successfully'
#     }
#
#
# @test_router.get("/get_score", response_model=dict)
# def get_score(user_answer: str, test_id: int, db: Session = Depends(get_db)):
#     db_test = test_crud.get_test(db, test_id=test_id)
#     if db_test is None:
#         raise HTTPException(status_code=404, detail="Test not found")
