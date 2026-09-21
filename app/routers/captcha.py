import base64
from io import BytesIO

import AntiCAP
from PIL import Image
from fastapi import APIRouter, Depends
from fastapi.concurrency import run_in_threadpool

from app.dependencies import check_balance_and_deduct
from app.models.database import User
from app.models.schemas import (
    ModelImageIn,
    ModelOrderImageIn,
    SliderImageIn,
    CompareImageIn,
    DoubleRotateIn,
    GeetestIconSimilarityIn,
)

router = APIRouter(prefix="/api", tags=["验证码识别"])
Atc = AntiCAP.Handler(show_banner=False)

REGIONS = [
    (376, 24, 412, 60),
    (412, 24, 448, 60),
    (448, 24, 484, 60),
]


def _crop_base64(img_base64: str, box: tuple) -> str:
    img_data = base64.b64decode(img_base64)
    img = Image.open(BytesIO(img_data))
    cropped = img.crop(box)
    buffer = BytesIO()
    cropped.save(buffer, format="PNG")
    return base64.b64encode(buffer.getvalue()).decode("utf-8")


@router.post("/ocr", summary="返回字符串", tags=["OCR识别"])
async def ocr(data: ModelImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(Atc.OCR, data.img_base64)
    return {"result": result}


@router.post("/math", summary="返回计算结果", tags=["计算识别"])
async def math(data: ModelImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(Atc.Math, data.img_base64)
    return {"result": result}


@router.post("/detection/icon", summary="检测图标,返回坐标", tags=["目标检测"])
async def detection_icon(data: ModelImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(Atc.Detection_Icon, data.img_base64)
    return {"result": result}


@router.post("/detection/text", summary="侦测文字,返回坐标", tags=["目标检测"])
async def detection_text(data: ModelImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(Atc.Detection_Text, data.img_base64)
    return {"result": result}


@router.post("/detection/icon/order", summary="按序返回图标的坐标", tags=["目标检测"])
async def detection_icon_order(data: ModelOrderImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(
        Atc.ClickIcon_Order,
        order_img_base64=data.order_img_base64,
        target_img_base64=data.target_img_base64,
    )
    return {"result": result}


@router.post("/detection/text/order", summary="按序返回文字的坐标", tags=["目标检测"])
async def detection_text_order(data: ModelOrderImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(
        Atc.ClickText_Order,
        order_img_base64=data.order_img_base64,
        target_img_base64=data.target_img_base64,
    )
    return {"result": result}


@router.post("/slider/match", summary="缺口滑块,返回坐标", tags=["滑块验证码，OpenCV算法"])
async def slider_match(data: SliderImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(
        Atc.Slider_Match,
        target_base64=data.target_base64,
        background_base64=data.background_base64,
    )
    return {"result": result}


@router.post("/slider/comparison", summary="阴影滑块,返回坐标", tags=["滑块验证码，OpenCV算法"])
async def slider_comparison(data: SliderImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(
        Atc.Slider_Comparison,
        target_base64=data.target_base64,
        background_base64=data.background_base64,
    )
    return {"result": result}


@router.post("/compare/similarity", summary="对比图片相似度", tags=["图片对比，孪生神经经网络模型"])
async def compare_similarity(data: CompareImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(
        Atc.Compare_Image_Similarity,
        image1_base64=data.img1_base64,
        image2_base64=data.img2_base64,
    )
    return {"result": float(result)}


@router.post("/rotate/single/rotate", summary="单图旋转验证码", tags=["旋转验证码，模型识别"])
async def single_rotate(data: ModelImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(Atc.Single_Rotate, img_base64=data.img_base64)
    return {"result": result}


@router.post("/rotate/double/rotate", summary="双图旋转验证码", tags=["旋转验证码,模型识别"])
async def double_rotate(data: DoubleRotateIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(
        Atc.Double_Rotate,
        inside_base64=data.inside_base64,
        outside_base64=data.outside_base64,
    )
    return {"result": result}


@router.post("/geetest/slide", summary="极验滑块验证码,返回缺口坐标", tags=["极验验证码,YOLO模型识别"])
async def geetest_slide(data: ModelImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(Atc.Geetest_SlideCAPTCHA, img_base64=data.img_base64)
    return {"result": result}


@router.post("/geetest/icon/click/icon", summary="极验图标点选-图标识别,返回图标列表", tags=["极验验证码,YOLO模型识别"])
async def geetest_icon_click_icon(data: ModelImageIn, current_user: User = Depends(check_balance_and_deduct)):
    result = await run_in_threadpool(Atc.Geetest_IconClick_Icon, img_base64=data.img_base64)
    return {"result": result}


@router.post("/geetest/icon/click/check", summary="极验图标点选-图标检查,返回坐标", tags=["极验验证码,YOLO模型识别"])
async def geetest_icon_click_check(data: ModelImageIn, current_user: User = Depends(check_balance_and_deduct)):
    # 按固定坐标裁剪出 3 张参考图片
    reference_imgs = [_crop_base64(data.img_base64, region) for region in REGIONS]

    # YOLO 模型检测图中所有图标，按检测坐标裁剪出对比图片
    detected_icons = await run_in_threadpool(Atc.Geetest_IconClick_Icon, img_base64=data.img_base64)
    compare_imgs = [_crop_base64(data.img_base64, tuple(icon["box"])) for icon in detected_icons]

    # 逐对计算相似度矩阵 scores[ref][cmp]
    num_refs = len(reference_imgs)
    scores = []
    for ref_img in reference_imgs:
        row = []
        for cmp_img in compare_imgs:
            sim_result = await run_in_threadpool(
                Atc.Geetest_IconClick_Similarity,
                img1_base64=ref_img,
                img2_base64=cmp_img,
            )
            row.append(sim_result["similarity"])
        scores.append(row)

    # 顺序贪心匹配：ref₀ 先选最优 → ref₁ 在剩余中选最优 → ref₂ 在剩余中选最优
    num_cmps = len(compare_imgs)
    results = [None] * num_refs
    used_cmp = set()
    for ri in range(num_refs):
        best_ci = None
        best_sim = -1
        for ci in range(num_cmps):
            if ci in used_cmp:
                continue
            if scores[ri][ci] > best_sim:
                best_sim = scores[ri][ci]
                best_ci = ci
        results[ri] = detected_icons[best_ci]["box"]
        used_cmp.add(best_ci)

    return {"result": results, "detected_icons": detected_icons}

@router.post("/geetest/icon/click/similarity", summary="极验图标点选-图标相似度", tags=["极验验证码,YOLO模型识别"])
async def geetest_icon_click_similarity(data: GeetestIconSimilarityIn, current_user: User = Depends(check_balance_and_deduct)):
    results = []
    for compare_img in data.compare_imgs:
        sim = await run_in_threadpool(
            Atc.Geetest_IconClick_Similarity,
            img1_base64=data.reference_img,
            img2_base64=compare_img,
        )
        results.append(sim)
    return {"result": results}