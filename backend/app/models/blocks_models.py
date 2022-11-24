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


class VideoMaterial(Base):
    __tablename__ = "video_material"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    url = Column(String)
    module_id = Column(Integer, ForeignKey("modules.id"))

    module = relationship("Module", back_populates="video_blocks")
