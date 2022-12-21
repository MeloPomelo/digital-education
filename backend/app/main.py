import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from app.models.database import Base, engine

from app.api.homework_router import media_router
from app.api.space_router import space_router
# from app.api.test_router import test_router
from app.api.user_router import user_router

from app.endpoints import signing
from app.endpoints import spaces
from app.endpoints import index

Base.metadata.create_all(bind=engine)


app = FastAPI()

origins = [
    "http://localhost:8000",
    "http://localhost:3006",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(media_router)
app.include_router(space_router)
# app.include_router(test_router)
app.include_router(user_router)
app.include_router(signing)
app.include_router(spaces)
app.include_router(index)

app.mount("/static", StaticFiles(directory="app/static/"), name="static")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)