from typing import Union, Literal
from fastapi import Request, Depends, HTTPException, status

from app.schemas.user_schema import User
from app.domains.role import Role
from app.crud.user_crud import get_current_user


class AuthCheck:
    def __init__(self, roles: Union[list[Role], Literal["All"]]):
        self.roles = roles

    def __call__(self, req: Request, user: User = Depends(get_current_user)):
        if self.roles != "All":
            if user and user.role != Role.ADMIN and user.role not in self.roles:
                raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN
                )
