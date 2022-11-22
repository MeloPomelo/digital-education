from sqlalchemy.orm import Session

from app.models.space_model import Space as ModelSpace
from app.models.space_model import Association as ModelAssociation
from app.models.module_model import Module as ModelModule

from app.schemas.space_schema import SpaceCreate as SchemaSpaceCreate
from .module_crud import delete_module


def create_space(db: Session, space: SchemaSpaceCreate):
    db_space = ModelSpace(
        title=space.title, description=space.description
    )
    db.add(db_space)
    db.commit()
    db.refresh(db_space)
    return db_space


def get_space(db: Session, space_id: int):
    return db.query(ModelSpace).filter(ModelSpace.id == space_id).first()


def delete_space(db: Session, space_id: int):
    for i in db.query(ModelModule).filter(ModelModule.space_id == space_id):
        delete_module(db, i.id)
    db.query(ModelAssociation).filter(ModelAssociation.space_id == space_id).delete()
    db.query(ModelSpace).filter(ModelSpace.id == space_id).delete()
    db.commit()
