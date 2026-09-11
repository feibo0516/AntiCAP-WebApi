from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.config import ACCESS_TOKEN_EXPIRE_MINUTES
from app.dependencies import get_current_user
from app.models.database import User, RegistrationCode, get_db
from app.models.schemas import UserRegister
from app.utils.security import verify_password, get_password_hash, create_access_token

router = APIRouter(prefix="/api", tags=["公共"])


@router.post("/register", summary="用户注册")
async def register(user_in: UserRegister, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).filter(User.username == user_in.username))
    if result.scalars().first():
        raise HTTPException(status_code=400, detail="Username already registered")

    result = await db.execute(
        select(RegistrationCode).filter(
            RegistrationCode.code == user_in.registration_code,
            RegistrationCode.is_used == False,
        )
    )
    code = result.scalars().first()
    if not code:
        raise HTTPException(status_code=400, detail="Invalid or used registration code")

    hashed_password = get_password_hash(user_in.password)
    new_user = User(
        username=user_in.username,
        hashed_password=hashed_password,
        role="user",
        balance=code.points,
    )
    db.add(new_user)
    code.is_used = True
    await db.commit()
    await db.refresh(new_user)
    return {"message": "Registration successful"}


@router.post("/login", summary="登录获取JWT")
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(User).filter(User.username == form_data.username))
    user = result.scalars().first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "role": user.role,
        "balance": user.balance,
    }


@router.get("/tokens/verification", summary="验证JWT")
async def verify_token_endpoint(current_user: User = Depends(get_current_user)):
    return {
        "username": current_user.username,
        "role": current_user.role,
        "balance": current_user.balance,
    }