import uvicorn
from fastapi import FastAPI

from app.models.database import Base, engine

from app.api.homework_router import media_router
from app.api.space_router import space_router
from app.api.test_router import test_router
from app.api.user_router import user_router


Base.metadata.create_all(bind=engine)


app = FastAPI()
app.include_router(media_router)
app.include_router(space_router)
app.include_router(test_router)
app.include_router(user_router)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)