from pydantic import BaseModel, Field
from uuid import uuid4, UUID
from typing import List

from app.schemas.homework_file_schema import HomeWorkFile


class HomeWorkBase(BaseModel):
    title: str
    description: str


class HomeWorkCreate(HomeWorkBase):
    homework_files_uuid: List[str] = []


class HomeWork(HomeWorkBase):
    uuid: UUID = Field(default_factory=uuid4)
    homework_files: List[HomeWorkFile] = []

    class Config:
        orm_mode = True
