from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.dependencies.auth_check import AuthCheck
from app.api.dependencies.db import get_db
from app.domains.role import Role

from .space_router import space_router

from app.models.module_model import Module
from app.schemas.module_schema import Module as SchemaModule
from app.schemas.module_schema import ModuleCreate as SchemaModuleCreate

from app.crud import module_crud


@space_router.post("/space_{space_id}/module/", response_model=SchemaModule)
def create_space_modules(module: SchemaModuleCreate, space_id: int, db: Session = Depends(get_db)):
    db_module = module_crud.create_space_modules(db, module=module, space_id=space_id)
    return db_module


@space_router.get("/modules", response_model=list[SchemaModule])
def read_modules(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Module).offset(skip).limit(limit).all()


@space_router.delete('/modules/module_{module_id}', response_model=dict)
def delete_module(module_id: int, db: Session = Depends(get_db)):
    db_module = module_crud.get_module(db, module_id=module_id)
    if db_module is None:
        raise HTTPException(status_code=404, detail="Space not found")
    module_crud.delete_module(db, module_id)
    return {
        'module_id': module_id,
        'status': 'delete successfully'
    }