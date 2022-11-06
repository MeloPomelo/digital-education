import uvicorn
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from app.models.database import Base, SessionLocal, engine

from app.models.user_model import User as ModelUser
from app.models.blocks_models import ModelTextMaterial

from app.schemas.user_schema import User as SchemaUser
from app.schemas.text_material_schema import TextMaterial as SchemaTextMaterial

from app.api.media_router import media_router
from app.api.space_router import space_router
from app.api.test_router import test_router


Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app = FastAPI()
app.include_router(media_router)
app.include_router(space_router)


@app.post("/user/", response_model=SchemaUser)
def create_user(user: SchemaUser, db: Session = Depends(get_db)):
    db_user = ModelUser(
        first_name=user.first_name, last_name=user.last_name, age=user.age
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@app.post("/text_materials/", response_model=SchemaTextMaterial)
def create_text_material(text_material: SchemaTextMaterial, db: Session = Depends(get_db)):
    db_text_material = ModelTextMaterial(
        title=text_material.title, description=text_material.description, text=text_material.text
    )
    db.add(db_text_material)
    db.commit()
    db.refresh(db_text_material)
    return db_text_material


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)