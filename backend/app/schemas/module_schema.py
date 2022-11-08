from pydantic import BaseModel

from app.schemas.block_schema import TextMaterial, Video



class ModuleBase(BaseModel):
    title: str


class ModuleCreate(ModuleBase):
    pass


class Module(ModuleBase):
    id: int
    space_id: int
    text_material: list[TextMaterial] = []
    video_material: list[Video] = []

    class Config:
        orm_mode = True


