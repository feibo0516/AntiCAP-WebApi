from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.models.database import User, UserRole
from app.utils.security import get_password_hash


async def ensure_admin_user(db: AsyncSession) -> None:
    admin_username = "admin"
    admin_password = "admin"

    result = await db.execute(select(User).filter(User.username == admin_username))
    admin_user = result.scalars().first()

    if not admin_user:
        hashed_password = get_password_hash(admin_password)
        new_admin = User(
            username=admin_username,
            hashed_password=hashed_password,
            role=UserRole.ADMIN,
            balance=1000000,
        )
        db.add(new_admin)
        await db.commit()
        print(f"Default admin user created with password: {admin_password}")
    else:
        admin_user.hashed_password = get_password_hash(admin_password)
        await db.commit()
        print(f"Admin password has been reset to: {admin_password}")