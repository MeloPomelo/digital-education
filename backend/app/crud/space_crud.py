from sqlalchemy.orm import Session
from app.schemas.space_schema import SpaceCreate as SchemaSpaceCreate
from app.models.space_model import Space as ModelSpace
from app.models import space_model, module_model
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
    for i in db.query(module_model.Module).filter(module_model.Module.space_id == space_id):
        delete_module(db, i.id)
    db.query(space_model.Association).filter(space_model.Association.space_id == space_id).delete()
    db.query(ModelSpace).filter(ModelSpace.id == space_id).delete()
    db.commit()
