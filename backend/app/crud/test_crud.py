from sqlalchemy.orm import Session

from app.models.test_model import Test
from app.schemas.test_schema import TestCreate


# def create_test(db: Session, test: TestCreate, module_id: int):
#     db_test = Test(title=test.title, description=test.description,
#                    form=test, user_id=test.user_id, module_id=module_id)
#     db.add(db_test)
#     db.commit()
#     db.refresh(db_test)
#     return db_test
#
#
# def get_test(db: Session, test_id: int):
#     return db.query(Test).filter(Test.id == test_id).first()
#
#
# def delete_test(db: Session, test_id: int):
#     db.query(Test).filter(Test.id == test_id).delete()
#     db.commit()


# def get_score(db: Session, test_id: int, user_form: dict):
