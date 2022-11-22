from fastapi import APIRouter, Depends, HTTPException
from app.models.database import SessionLocal
from app.models.space_model import Space
from app.models.space_model import Association

from app.schemas.space_schema import Space as SchemaSpace
from app.schemas.space_schema import SpaceCreate as SchemaSpaceCreate
from app.schemas.space_schema import Association as SchemaAssociation

from sqlalchemy.orm import Session

from app.crud import space_crud

space_router = APIRouter(
    prefix='/space',
    tags=['space'],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@space_router.post("/", response_model=SchemaSpace)
def create_space(space: SchemaSpaceCreate, db: Session = Depends(get_db)):
    db_space = space_crud.create_space(db, space=space)
    return db_space


@space_router.get("/", response_model=list[SchemaSpace])
def read_spaces(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Space).offset(skip).limit(limit).all()


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
