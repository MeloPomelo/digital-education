from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

import os
from dotenv import load_dotenv


Base = declarative_base()
BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
load_dotenv(os.path.join(BASE_DIR, ".env"))

DATABASE_URL = os.environ["DATABASE_URL"]

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

