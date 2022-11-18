from uuid import uuid4, UUID
from pydantic import BaseModel, Field
from typing import Union
from app.schemas.module_schema import Module


class AssociationBase(BaseModel):
    pass


class AssociationUsers(AssociationBase):
    user_id: UUID = Field(default_factory=uuid4)
    # users: list[User]

    class Config:
        orm_mode = True


class AssociationSpaces(AssociationBase):
    space_id: int

    class Config:
        orm_mode = True


class Association(AssociationUsers, AssociationSpaces):
    # space_id: int
    # user_id: UUID = Field(default_factory=uuid4)

    class Config:
        orm_mode = True


class SpaceBase(BaseModel):
    title: str
    description: str


class SpaceCreate(SpaceBase):
    pass


class Space(SpaceBase):
    id: int
    modules: list[Module] = []
    users: list[AssociationUsers] = []

    class Config:
        orm_mode = True
