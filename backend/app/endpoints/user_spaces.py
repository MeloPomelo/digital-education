from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="app/templates")


@router.get("/user_spaces", response_class=HTMLResponse)
async def rules(request: Request):
    return templates.TemplateResponse("classes.html", {"request": request})