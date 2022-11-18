from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from app.models.database import Base


class Space(Base):
    __tablename__ = "spaces"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)

    users = relationship("Association", back_populates="space")
    modules = relationship("Module", back_populates="space")


class Association(Base):
    __tablename__ = "association_table"
    space_id = Column(Integer, ForeignKey("spaces.id"), primary_key=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), primary_key=True)

    user = relationship("User", back_populates="spaces")
    space = relationship("Space", back_populates="users")




