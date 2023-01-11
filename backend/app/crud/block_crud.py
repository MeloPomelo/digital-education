from sqlalchemy.orm import Session

from app.models.blocks_models import TextMaterial as ModelTextMaterial
from app.models.blocks_models import VideoMaterial as ModelVideoMaterial
from app.schemas.block_schema import SchemaTextMaterialCreate, SchemaTextMaterialUpdate, SchemaVideoCreate, SchemaVideoUpdate


def create_modules_text_materials(db: Session, text_material: SchemaTextMaterialCreate, module_id: int):
    db_text_materials = ModelTextMaterial(title=text_material.title, description=text_material.description,
                                          text=text_material.text, module_id=module_id)
    db.add(db_text_materials)
    db.commit()
    db.refresh(db_text_materials)
    return db_text_materials


def get_text_material(db: Session, text_material_id: int):
    return db.query(ModelTextMaterial).filter(ModelTextMaterial.id == text_material_id).first()


def update_text_material(db: Session, new_text_material_data: SchemaTextMaterialUpdate, text_material_id: int):
    new_text_material = db.query(ModelTextMaterial).filter(ModelTextMaterial.id == text_material_id).first()

    new_text_material.title = new_text_material_data.title
    new_text_material.description = new_text_material_data.description
    new_text_material.text = new_text_material_data.text

    db.add(new_text_material)
    db.commit()
    db.refresh(new_text_material)
    return new_text_material


def delete_text_material(db: Session, text_material_id: int):
    db.query(ModelTextMaterial).filter(ModelTextMaterial.id == text_material_id).delete()
    db.commit()


def create_modules_video(db: Session, video: SchemaVideoCreate, module_id: int):
    db_video = ModelVideoMaterial(title=video.title, description=video.description,
                                  url=video.url, module_id=module_id)
    db.add(db_video)
    db.commit()
    db.refresh(db_video)
    return db_video


def get_video_material(db: Session, video_material_id: int):
    return db.query(ModelVideoMaterial).filter(ModelVideoMaterial.id == video_material_id).first()


def update_video_material(db: Session, new_video_material_data: SchemaVideoUpdate, video_material_id: int):
    new_video_material = db.query(ModelVideoMaterial).filter(ModelVideoMaterial.id == video_material_id).first()

    new_video_material.title = new_video_material_data.title
    new_video_material.description = new_video_material_data.description
    new_video_material.url = new_video_material_data.url

    db.add(new_video_material)
    db.commit()
    db.refresh(new_video_material)
    return new_video_material
    

def delete_video_material(db: Session, video_material_id: int):
    db.query(ModelVideoMaterial).filter(ModelVideoMaterial.id == video_material_id).delete()
    db.commit()
