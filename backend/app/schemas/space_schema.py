from pydantic import BaseModel
from typing import Union
from app.schemas.module_schema import Module


class SpaceBase(BaseModel):
    title: str
    description: str


class SpaceCreate(SpaceBase):
    pass


class Space(SpaceBase):
    id: int
    modules: list[Module] = []

    class Config:
        orm_mode = True