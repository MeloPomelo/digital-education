from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.models.database import Base


class TextMaterial(Base):
    __tablename__ = "text_material"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    text = Column(String)
    module_id = Column(Integer, ForeignKey("modules.id"))

    module = relationship("Module", back_populates="text_blocks")


    def __repr__(self):
        return f"{self.id} | {self.title} | {self.description} | {self.text} | {self.module_id}"


class VideoMaterial(Base):
    __tablename__ = "video_material"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    url = Column(String)
    module_id = Column(Integer, ForeignKey("modules.id"))

    module = relationship("Module", back_populates="video_blocks")


    def __repr__(self):
        return f"{self.id} | {self.title} | {self.description} | {self.url} | {self.module_id}"