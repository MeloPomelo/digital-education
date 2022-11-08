from sqlalchemy.orm import Session
from app.schemas.module_schema import ModuleCreate as SchemaModuleCreate
from app.models.module_model import Module as ModelModule


def create_space_modules(db: Session, module: SchemaModuleCreate, space_id: int):
    db_module = ModelModule(space_id=space_id, title=module.title)
    db.add(db_module)
    db.commit()
    db.refresh(db_module)
    return db_module