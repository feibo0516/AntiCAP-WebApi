from typing import Optional

from pydantic import BaseModel, field_validator


class ModelImageIn(BaseModel):
    img_base64: str


class ModelOrderImageIn(BaseModel):
    order_img_base64: str
    target_img_base64: str


class SliderImageIn(BaseModel):
    target_base64: str
    background_base64: str


class CompareImageIn(BaseModel):
    img1_base64: str
    img2_base64: str


class DoubleRotateIn(BaseModel):
    inside_base64: str
    outside_base64: str


class UserRegister(BaseModel):
    username: str
    password: str
    registration_code: str


class UserUpdate(BaseModel):
    password: Optional[str] = None
    balance: Optional[int] = None


class EndpointCostIn(BaseModel):
    path: str
    cost: int
    description: Optional[str] = None


class GenerateCodeIn(BaseModel):
    points: int = 1000


class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    role: str
    balance: int


class UserInfo(BaseModel):
    username: str
    role: str
    balance: int
    id: int

    model_config = {"from_attributes": True}


class RegCodeResponse(BaseModel):
    registration_code: str
    points: int

    model_config = {"from_attributes": True}


class GeetestIconSimilarityIn(BaseModel):
    reference_img: str
    compare_imgs: list[str]

    @field_validator("compare_imgs")
    @classmethod
    def validate_compare_count(cls, v):
        if len(v) < 1 or len(v) > 4:
            raise ValueError("compare_imgs 必须包含 1 到 4 张图片")
        return v