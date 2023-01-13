from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.dependencies.auth_check import AuthCheck
from app.api.dependencies.db import get_db
from app.domains.role import Role

from .space_router import space_router

from app.schemas.block_schema import SchemaTextMaterialCreate, SchemaTextMaterialUpdate, SchemaVideoCreate, SchemaVideoUpdate
from app.schemas.block_schema import Video as SchemaVideo
from app.schemas.block_schema import TextMaterial as SchemaTextMaterial

from app.crud import block_crud


@space_router.post("/space_{space_id}/module/create_text_material", response_model=SchemaTextMaterial)
def create_module_text_materials(text_material: SchemaTextMaterialCreate, module_id: int, db: Session = Depends(get_db)):
    db_text_material = block_crud.create_modules_text_materials(db, text_material=text_material,
                                                                module_id=module_id)
    return db_text_material


@space_router.put('/space_{space_id}/module/text_{text_material_id}', response_model=SchemaTextMaterial)
def update_module_text_materials(new_text_material_data: SchemaTextMaterialCreate, text_material_id: int, db: Session = Depends(get_db)):
    return block_crud.update_text_material(db=db, new_text_material_data=new_text_material_data, text_material_id=text_material_id)


@space_router.delete('/space_{space_id}/module/text_{text_material_id}', response_model=dict)
def delete_text_material(text_material_id: int, db: Session = Depends(get_db)):
    db_text_material = block_crud.get_text_material(db, text_material_id=text_material_id)
    if db_text_material is None:
        raise HTTPException(status_code=404, detail="Space not found")
    block_crud.delete_text_material(db, text_material_id)
    return {
        'text_material_id': text_material_id,
        'status': 'delete successfully'
    }


@space_router.post("/space_{space_id}/module/create_video", response_model=SchemaVideo)
def create_module_video_materials(video: SchemaVideoCreate, module_id: int, db: Session = Depends(get_db)):
    db_video = block_crud.create_modules_video(db, video=video, module_id=module_id)
    return db_video


@space_router.put('/space_{sapce_id}/module/video_{video_material_id}', response_model=SchemaVideo)
def update_video_material(new_video_material_data: SchemaVideoUpdate, video_material_id: int, db: Session = Depends(get_db)):
    return block_crud.update_video_material(db=db, new_video_material_data=new_video_material_data, video_material_id=video_material_id)


@space_router.delete('/space_{space_id}/module/video_{video_material_id}', response_model=dict)
def delete_video_material(video_material_id: int, db: Session = Depends(get_db)):
    db_video_material = block_crud.get_video_material(db, video_material_id=video_material_id)
    if db_video_material is None:
        raise HTTPException(status_code=404, detail="Space not found")
    block_crud.delete_video_material(db, video_material_id)
    return {
        'video_material_id': video_material_id,
        'status': 'delete successfully'
    }