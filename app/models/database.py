import enum
from datetime import datetime

from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base

from app.config import db_settings

Base = declarative_base()

engine = create_async_engine(
    db_settings.database_url,
    connect_args=db_settings.connect_args,
    **db_settings.engine_kwargs,
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
    class_=AsyncSession,
)


class UserRole(str, enum.Enum):
    ADMIN = "admin"
    USER = "user"


class User(Base):
    __tablename__ = "users"

    id: int = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username: str = Column(String(128), unique=True, index=True)
    hashed_password: str = Column(String(256))
    role: str = Column(String(16), default=UserRole.USER)
    balance: int = Column(Integer, default=1000)
    created_at: datetime = Column(DateTime, default=datetime.utcnow)


class RegistrationCode(Base):
    __tablename__ = "registration_codes"

    id: int = Column(Integer, primary_key=True, index=True, autoincrement=True)
    code: str = Column(String(64), unique=True, index=True)
    is_used: bool = Column(Boolean, default=False)
    points: int = Column(Integer, default=1000)
    created_by: int = Column(Integer)
    created_at: datetime = Column(DateTime, default=datetime.utcnow)


class EndpointCost(Base):
    __tablename__ = "endpoint_costs"

    id: int = Column(Integer, primary_key=True, index=True, autoincrement=True)
    path: str = Column(String(256), unique=True, index=True)
    cost: int = Column(Integer, default=1)
    description: str = Column(String(512), nullable=True)


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_db():
    async with SessionLocal() as db:
        yield db