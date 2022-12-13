from pydantic import BaseModel


class AnswerBase(BaseModel):
    text: str
    is_true: bool


class AnswerCreate(AnswerBase):
    pass


class Answer(AnswerBase):
    id: int
    question_id: int

    class Config:
        orm_mode = True


class QuestionBase(BaseModel):
    text: str


class QuestionCreate(QuestionBase):
    pass


class Question(QuestionBase):
    id: int
    test_id: int
    answers: list[Answer] = []

    class Config:
        orm_mode = True


class TestBase(BaseModel):
    title: str
    description: str
    user_id: str


class TestCreate(TestBase):
    pass


class Test(TestBase):
    id: int
    module_id: int
    questions: list[Question] = []

    class Config:
        orm_mode = True


