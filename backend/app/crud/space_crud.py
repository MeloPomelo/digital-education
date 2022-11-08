from sqlalchemy.orm import Session
from app.schemas.space_schema import SpaceCreate as SchemaSpaceCreate
from app.models.space_model import Space as ModelSpace


def create_space(db: Session, space: SchemaSpaceCreate):
    db_space = ModelSpace(
        title=space.title, description=space.description
    )
    db.add(db_space)
    db.commit()
    db.refresh(db_space)
    return db_space