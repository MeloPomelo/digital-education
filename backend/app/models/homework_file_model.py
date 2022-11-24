import uuid
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID

from app.models.database import Base


class HomeWorkFile(Base):
    __tablename__ = "homework_files"

    uuid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String)
    file_url = Column(String)

    homework_id = Column(UUID(as_uuid=True), ForeignKey("homeworks.uuid"))

    homework = relationship("HomeWork", back_populates="homework_files")
