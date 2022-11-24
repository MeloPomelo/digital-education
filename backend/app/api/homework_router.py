import os

from fastapi import APIRouter, Depends, HTTPException, UploadFile
from fastapi.responses import JSONResponse, FileResponse
from sqlalchemy.orm import Session

from app.api.dependencies.auth_check import AuthCheck
from app.api.dependencies.db import get_db
from app.domains.role import Role

from app.schemas.homework_file_schema import HomeWorkFile, HomeWorkFileCreate
from app.schemas.homework_schema import HomeWork, HomeWorkCreate

from app.crud import homework_crud as CrudHomeWork


media_router = APIRouter(
    prefix='/media',
    tags=['media'],
    dependencies=[Depends(AuthCheck('All'))]
)


@media_router.post("/upload_file", response_model=HomeWorkFile)
async def upload_file(hw_file: UploadFile, db: Session = Depends(get_db)):
    hw_file_db = CrudHomeWork.upload_file(
        title=hw_file.filename,
        db=db
    )

    extension = hw_file.filename.split('.')[-1]
    file_name = str(hw_file_db.uuid) + '.' + extension

    with open("homework_files/" + file_name, 'wb') as file:
        content = await hw_file.read()
        file.write(content)
        file.close()

    return hw_file_db


@media_router.post("/", response_model=HomeWork)
def submit_work(hw: HomeWorkCreate, db: Session = Depends(get_db)):
    return CrudHomeWork.submit_work(hw, db)


@media_router.get("/get_homework/homework_{home_work_id}", response_model=HomeWork)
def get_homework(homework_uuid: str, db: Session = Depends(get_db)):
    return CrudHomeWork.get_homework(homework_uuid, db)


@media_router.get("/get_homework_file/homework_file_{hw_file_id}", response_model=FileResponse)
def get_homework_file(hw_file_uuid: str, db: Session = Depends(get_db)):
    return