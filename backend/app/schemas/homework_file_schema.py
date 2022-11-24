from pydantic import BaseModel, Field
from uuid import uuid4, UUID
from typing import List


class HomeWorkFileBase(BaseModel):
    title: str
    file_url: str


class HomeWorkFileCreate(HomeWorkFileBase):
    pass


class HomeWorkFile(HomeWorkFileBase):
    uuid: UUID = Field(default_factory=uuid4())

    class Config:
        orm_mode = True