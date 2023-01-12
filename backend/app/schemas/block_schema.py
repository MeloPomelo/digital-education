from pydantic import BaseModel



class BlockBase(BaseModel):
    title: str
    description: str


class SchemaTextMaterialCreate(BlockBase):
    text: str


class SchemaTextMaterialUpdate(SchemaTextMaterialCreate):
    pass

class TextMaterial(BlockBase):
    id: int
    module_id: int

    class Config:
        orm_mode = True


class SchemaVideoCreate(BlockBase):
    url: str


class SchemaVideoUpdate(SchemaVideoCreate):
    pass


class Video(BlockBase):
    id: int
    module_id: int

    class Config:
        orm_mode = True