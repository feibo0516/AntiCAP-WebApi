import uuid

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.dependencies import get_current_admin_user
from app.models.database import User, RegistrationCode, EndpointCost, get_db
from app.models.schemas import UserUpdate, EndpointCostIn, GenerateCodeIn
from app.utils.security import get_password_hash

router = APIRouter(prefix="/api/admin", tags=["管理员"], dependencies=[Depends(get_current_admin_user)])


@router.post("/generate_code", summary="生成注册码")
async def generate_code(
    data: GenerateCodeIn,
    current_user: User = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db),
):
    code_str = str(uuid.uuid4())
    new_code = RegistrationCode(code=code_str, created_by=current_user.id, points=data.points)
    db.add(new_code)
    await db.commit()
    return {"registration_code": code_str, "points": data.points}


@router.get("/regcodes", summary="获取注册码列表")
async def get_regcodes(
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(
        select(RegistrationCode).order_by(RegistrationCode.id.desc()).offset(skip).limit(limit)
    )
    return result.scalars().all()


@router.delete("/regcodes/{code_id}", summary="删除注册码")
async def delete_regcode(
    code_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(RegistrationCode).filter(RegistrationCode.id == code_id))
    regcode = result.scalars().first()
    if not regcode:
        raise HTTPException(status_code=404, detail="Registration code not found")
    if regcode.is_used:
        raise HTTPException(status_code=400, detail="Cannot delete a used registration code")
    await db.delete(regcode)
    await db.commit()
    return {"message": "Registration code deleted successfully"}


@router.get("/users", summary="获取所有用户")
async def get_users(
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(User).offset(skip).limit(limit))
    users = result.scalars().all()
    return [
        {"username": u.username, "role": u.role, "balance": u.balance, "id": u.id}
        for u in users
    ]


@router.put("/users/{username}", summary="修改用户信息")
async def update_user(
    username: str,
    user_update: UserUpdate,
    current_user: User = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(User).filter(User.username == username))
    user = result.scalars().first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user_update.password:
        user.hashed_password = get_password_hash(user_update.password)
    if user_update.balance is not None:
        user.balance = user_update.balance

    await db.commit()
    return {"message": "User updated successfully", "username": user.username, "balance": user.balance}


@router.get("/costs", summary="获取所有接口扣点配置")
async def get_endpoint_costs(
    current_user: User = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(EndpointCost))
    return result.scalars().all()


@router.post("/costs", summary="设置接口扣点")
async def set_endpoint_cost(
    cost_in: EndpointCostIn,
    current_user: User = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(EndpointCost).filter(EndpointCost.path == cost_in.path))
    cost_entry = result.scalars().first()
    if cost_entry:
        cost_entry.cost = cost_in.cost
        cost_entry.description = cost_in.description
    else:
        cost_entry = EndpointCost(path=cost_in.path, cost=cost_in.cost, description=cost_in.description)
        db.add(cost_entry)

    await db.commit()
    await db.refresh(cost_entry)
    return cost_entry