from pydantic import BaseModel



class BlockBase(BaseModel):
    title: str
    description: str


class SchemaTextMaterialCreate(BlockBase):
    text: str


class TextMaterial(BlockBase):
    id: int
    module_id: int

    class Config:
        orm_mode = True


class SchemaVideoCreate(BlockBase):
    url: str


class Video(BlockBase):
    id: int
    module_id: int

    class Config:
        orm_mode = True