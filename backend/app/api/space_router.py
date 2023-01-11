from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.dependencies.auth_check import AuthCheck
from app.api.dependencies.db import get_db
from app.domains.role import Role

from app.models.space_model import Space
from app.models.space_model import Association
from app.models.user_model import User

from app.schemas.space_schema import Space as SchemaSpace
from app.schemas.space_schema import SpaceCreate as SchemaSpaceCreate
from app.schemas.space_schema import Association as SchemaAssociation
from app.schemas.user_schema import User as SchemaUser

from app.crud import space_crud, user_crud


space_router = APIRouter(
    prefix='/space',
    tags=['space'],
    dependencies=[Depends(AuthCheck([Role.TEACHER]))]
)


@space_router.post("/", response_model=SchemaSpace)
def create_space(space: SchemaSpaceCreate, db: Session = Depends(get_db)):
    db_space = space_crud.create_space(db, space=space)
    return db_space


@space_router.get("/", response_model=list[SchemaSpace])
def read_spaces(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Space).offset(skip).limit(limit).all()


@space_router.get("/space_{space_id}", response_model=SchemaSpace)
def read_space_by_id(space_id: int, db: Session = Depends(get_db)):
    return space_crud.get_space(db=db, space_id=space_id)


@space_router.get("/get_user_spaces", response_model=list[SchemaSpace])
async def read_user_spaces(db: Session = Depends(get_db), current_user: User = Depends(user_crud.get_current_user)):
    return db.query(Space).join(Space.users).filter(Space.users.property.mapper.c.user_id == current_user.id).all()


@space_router.get("/get_all_user_in_space", response_model=list[SchemaUser])
async def read_spaces_user(space_id: int, db: Session = Depends(get_db)):
    return db.query(User).join(User.spaces).filter(User.spaces.property.mapper.c.space_id == space_id).all()


@space_router.delete('/space_{space_id}', response_model=dict)
def delete_space(space_id: int, db: Session = Depends(get_db)):
    db_space = space_crud.get_space(db, space_id=space_id)
    if db_space is None:
        raise HTTPException(status_code=404, detail="Space not found")
    space_crud.delete_space(db, space_id)
    return {
        'space_id': space_id,
        'status': 'delete successfully'
    }


@space_router.post("/add_user", response_model=SchemaAssociation)
def add_user_to_space(association: SchemaAssociation, db: Session = Depends(get_db)):
    db_association = Association(space_id=association.space_id, user_id=association.user_id)
    db.add(db_association)
    db.commit()
    db.refresh(db_association)
    return db_association


