from pydantic import BaseModel

from app.schemas.block_schema import TextMaterial, Video
from app.schemas.test_schema import Test


class ModuleBase(BaseModel):
    title: str


class ModuleCreate(ModuleBase):
    pass


class Module(ModuleBase):
    id: int
    space_id: int
    text_blocks: list[TextMaterial] = []
    video_blocks: list[Video] = []
    tests: list[Test] = []

    class Config:
        orm_mode = True


