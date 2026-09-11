import logging

from fastapi import Depends, HTTPException, Request, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.models.database import User, UserRole, EndpointCost, get_db
from app.utils.lock import KeyedLock
from app.utils.security import verify_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/login")
user_locks = KeyedLock()


class NoStaticFilter(logging.Filter):
    def filter(self, record: logging.LogRecord) -> bool:
        message = record.getMessage()
        is_static = any(
            pattern in message
            for pattern in (
                '"GET /_next/',
                '"GET /static/',
                '"GET /myhome/',
                '"GET /favicon.ico',
                '"GET /admin/index.txt?',
                '"GET /register/index.txt?',
                '"GET /login/index.txt?_rsc',
                '"GET /index.txt?',
                '"GET /register/',
                '"GET /swagger/',
            )
        )
        return not is_static


async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db),
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    username = verify_token(token, credentials_exception)
    result = await db.execute(select(User).filter(User.username == username))
    user = result.scalars().first()
    if user is None:
        raise credentials_exception
    return user


async def get_current_admin_user(
    current_user: User = Depends(get_current_user),
) -> User:
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Not authorized")
    return current_user


async def check_balance_and_deduct(
    request: Request,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> User:
    if current_user.role == UserRole.ADMIN:
        return current_user

    path = request.url.path
    result = await db.execute(select(EndpointCost).filter(EndpointCost.path == path))
    cost_entry = result.scalars().first()
    cost = cost_entry.cost if cost_entry else 1

    async with await user_locks(f"user_{current_user.id}"):
        await db.refresh(current_user)
        if current_user.balance < cost:
            raise HTTPException(status_code=402, detail="Insufficient balance")
        current_user.balance -= cost
        await db.commit()

    return current_user