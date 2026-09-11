import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.staticfiles import StaticFiles

from app.config import DESCRIPTION, APP_TITLE, APP_VERSION, db_settings
from app.dependencies import NoStaticFilter
from app.models.database import get_db, init_db
from app.routers import auth, admin, captcha
from app.services.auth import ensure_admin_user


@asynccontextmanager
async def lifespan(app: FastAPI):
    print(f"[数据库] 类型: {db_settings.db_type}, 地址: {db_settings.database_url}")
    await init_db()
    async for db in get_db():
        await ensure_admin_user(db)
        break
    yield


def create_app() -> FastAPI:
    app = FastAPI(
        title=APP_TITLE,
        description=DESCRIPTION,
        version=APP_VERSION,
        docs_url=None,
        lifespan=lifespan,
    )

    @app.get("/docs", include_in_schema=False)
    async def custom_swagger_ui_html():
        return get_swagger_ui_html(
            openapi_url=app.openapi_url,
            title=app.title + " - 开发者文档",
            oauth2_redirect_url=app.swagger_ui_oauth2_redirect_url,
            swagger_js_url="/swagger/swagger-ui-bundle.js",
            swagger_css_url="/swagger/swagger-ui.css",
        )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(auth.router)
    app.include_router(admin.router)
    app.include_router(captcha.router)

    app.mount("/", StaticFiles(directory="static", html=True), name="static")

    return app


app = create_app()


def configure_logging():
    uvicorn_access_logger = logging.getLogger("uvicorn.access")
    uvicorn_access_logger.addFilter(NoStaticFilter())