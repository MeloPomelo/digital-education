from sqlalchemy import Column, Integer, String

from app.models.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    age = Column(Integer)

    def __repr__(self):
        return f"{self.id} | {self.first_name} | {self.last_name} | {self.age}"
