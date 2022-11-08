from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.models.database import Base


class Space(Base):
    __tablename__ = "spaces"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)

    # users = relationship("User", back_populates="spaces")
    modules = relationship("Module", back_populates="space")


    def __repr__(self):
        return f"{self.id} | {self.title} | {self.description}"