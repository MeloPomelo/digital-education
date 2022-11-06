from sqlalchemy import Column, Integer, String

from app.models.database import Base


class ModelTextMaterial(Base):
    __tablename__ = "text_materials"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    text = Column(String)

    def __repr__(self):
        return f"{self.id} | {self.title} | {self.description} | {self.text}"
