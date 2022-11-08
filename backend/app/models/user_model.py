import uuid
from sqlalchemy import Column, Integer, String, BOOLEAN
from sqlalchemy.dialects.postgresql import UUID

from app.models.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String, unique=True)
    hashed_password = Column(String)
    first_name = Column(String)
    last_name = Column(String)
    # disabled = Column(BOOLEAN)

    def __repr__(self):
        return f"{self.id} | {self.first_name} | {self.last_name} | {self.hashed_password}"
