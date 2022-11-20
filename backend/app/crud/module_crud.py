from sqlalchemy.orm import Session
from app.schemas.module_schema import ModuleCreate as SchemaModuleCreate
from app.models.module_model import Module as ModelModule
from app.models.blocks_models import TextMaterial, VideoMaterial
from .block_crud import delete_text_material, delete_video_material


def create_space_modules(db: Session, module: SchemaModuleCreate, space_id: int):
    db_module = ModelModule(space_id=space_id, title=module.title)
    db.add(db_module)
    db.commit()
    db.refresh(db_module)
    return db_module


def get_module(db: Session, module_id: int):
    return db.query(ModelModule).filter(ModelModule.id == module_id).first()


def delete_module(db: Session, module_id: int):
    for i in db.query(TextMaterial).filter(TextMaterial.module_id == module_id):
        delete_text_material(db, i.id)
    for i in db.query(VideoMaterial).filter(VideoMaterial.module_id == module_id):
        delete_video_material(db, i.id)
    db.query(ModelModule).filter(ModelModule.id == module_id).delete()
    db.commit()