from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from app.models.database import Base


class Test(Base):
    __tablename__ = "tests"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    user_id = Column(String)
    module_id = Column(Integer, ForeignKey("modules.id"))
    questions = relationship("Question", back_populates="test")

    module = relationship("Module", back_populates="tests")


class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    test_id = Column(Integer, ForeignKey("tests.id"))
    text = Column(String)
    answers = relationship("Answer", back_populates="question")

    test = relationship("Test", back_populates="questions")


class Answer(Base):
    __tablename__ = "answers"

    id = Column(Integer, primary_key=True, index=True)
    question_id = Column(Integer, ForeignKey("questions.id"))
    text = Column(String)
    is_true = Column(Boolean)

    question = relationship("Question", back_populates="answers")