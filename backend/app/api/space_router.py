from fastapi import APIRouter, Depends

from app.models.database import SessionLocal
from app.models.space_model import Space
from app.models.module_model import Module
from app.models.space_model import Association

from app.schemas.space_schema import Space as SchemaSpace
from app.schemas.space_schema import SpaceCreate as SchemaSpaceCreate
from app.schemas.module_schema import Module as SchemaModule
from app.schemas.module_schema import ModuleCreate as SchemaModuleCreate
from app.schemas.block_schema import TextMaterialCreate, VideoCreate
from app.schemas.block_schema import Video as SchemaVideo
from app.schemas.block_schema import TextMaterial as SchemaTextMaterial
from app.schemas.space_schema import Association as SchemaAssociation

from sqlalchemy.orm import Session

from app.crud import space_crud, module_crud, block_crud

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


@space_router.post("/{space_id}/module/", response_model=SchemaModule)
def create_space_modules(module: SchemaModuleCreate, space_id: int, db: Session = Depends(get_db)):
    db_module = module_crud.create_space_modules(db, module=module, space_id=space_id)
    return db_module


@space_router.get("/", response_model=list[SchemaSpace])
def read_spaces(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Space).offset(skip).limit(limit).all()


@space_router.get("/modules", response_model=list[SchemaModule])
def read_modules(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Module).offset(skip).limit(limit).all()


@space_router.post("/{space_id}/module/create_text_material", response_model=SchemaTextMaterial)
def create_module_text_materials(text_material: TextMaterialCreate, module_id: int, db: Session = Depends(get_db)):
    db_text_material = block_crud.create_modules_text_materials(db, text_material=text_material,
                                                                module_id=module_id)
    return db_text_material


@space_router.post("/{space_id}/module/create_video", response_model=SchemaVideo)
def create_module_text_materials(video: VideoCreate, module_id: int, db: Session = Depends(get_db)):
    db_video = block_crud.create_modules_video(db, video=video, module_id=module_id)
    return db_video


@space_router.post("/add_user", response_model=SchemaAssociation)
def add_user_to_space(association: SchemaAssociation, db: Session = Depends(get_db)):
    db_association = Association(space_id=association.space_id, user_id=association.user_id)
    db.add(db_association)
    db.commit()
    db.refresh(db_association)
    return db_association


