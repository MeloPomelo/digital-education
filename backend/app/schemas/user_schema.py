from uuid import uuid4, UUID
from typing import Union, List, Optional
from pydantic import BaseModel, Field

from app.schemas.space_schema import AssociationSpaces
from app.models.user_model import Role


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Union[str, None] = None


class UserBase(BaseModel):
    username: str
    first_name: str
    last_name: str
    patronymic: str
    email: str
    phone_number: str
    role: Optional[Role]
    # disabled: Union[bool, None] = None


class UserCreate(UserBase):
    password: str


class UserUpdate(BaseModel):
    first_name: str
    last_name: str
    patronymic: str
    email: str
    phone_number: str


class User(UserBase):
    id: UUID = Field(default_factory=uuid4)
    hashed_password: str
    spaces: list[AssociationSpaces] = []

    class Config:
        orm_mode = True
