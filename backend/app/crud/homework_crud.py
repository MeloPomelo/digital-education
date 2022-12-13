from sqlalchemy.orm import Session
from uuid import uuid4

from app.models.homework_file_model import HomeWorkFile as ModelHomeWorkFile
from app.models.homework_model import HomeWork as ModelHomeWork

from app.schemas.homework_schema import HomeWorkCreate


def get_homework_file(hm_file_uuid: uuid4, db: Session):
    return db.query(ModelHomeWorkFile).filter(ModelHomeWorkFile.uuid == hm_file_uuid).first()


def upload_file(title: str, db: Session):
    hw_file_db = ModelHomeWorkFile(title=title)

    db.add(hw_file_db)
    db.commit()
    db.refresh(hw_file_db)

    return add_file_url(hw_file_db, db)


def add_file_url(hw_file_db: ModelHomeWork, db: Session):
    extension = hw_file_db.title.split('.')[-1]
    file_name = str(hw_file_db.uuid) + '.' + extension

    new_hw_file_db = get_homework_file(str(hw_file_db.uuid), db)
    new_hw_file_db.file_url = "homeworks_files/" + file_name
    db.add(new_hw_file_db)
    db.commit()
    db.refresh(new_hw_file_db)

    return new_hw_file_db


def submit_work(hw: HomeWorkCreate, db: Session):
    homework_files_uuid = hw.homework_files_uuid

    hw_db = ModelHomeWork(
        title=hw.title,
        description=hw.description,
    )
    db.add(hw_db)
    db.commit()
    db.refresh(hw_db)

    for uuid in homework_files_uuid:
        hw_file = get_homework_file(uuid, db)
        hw_file.homework_id = hw_db.uuid
        db.add(hw_file)
        db.commit()
        db.refresh(hw_file)

    return hw_db


def get_homework(homework_uuid: str, db: Session):
    return db.query(ModelHomeWork).filter(ModelHomeWork.uuid == homework_uuid).first()


# def get_homework_file(hw_file_uuid: str, db: Session):
#     return