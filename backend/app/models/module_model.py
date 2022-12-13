from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.models.database import Base


class Module(Base):
    __tablename__ = "modules"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    space_id = Column(Integer, ForeignKey("spaces.id"))

    space = relationship("Space", back_populates="modules")

    text_blocks = relationship("TextMaterial", back_populates="module")
    video_blocks = relationship("VideoMaterial", back_populates="module")
    tests = relationship("Test", back_populates="module")
