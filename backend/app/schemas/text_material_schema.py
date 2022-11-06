from pydantic import BaseModel


class TextMaterial(BaseModel):
    title: str
    description: str
    text: str

    class Config:
        orm_mode = True