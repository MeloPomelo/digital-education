from fastapi import APIRouter
from fastapi.responses import RedirectResponse

router = APIRouter()


@router.get("/", response_class=RedirectResponse)
async def main():
    return RedirectResponse("/user_spaces")