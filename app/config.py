import os
from dataclasses import dataclass
from typing import Literal

DBType = Literal["sqlite", "mysql", "pgsql"]


def get_secret_key() -> str:
    key_file = "secret.key"
    if os.path.exists(key_file):
        with open(key_file, "r") as f:
            return f.read().strip()
    new_key = os.urandom(32).hex()
    with open(key_file, "w") as f:
        f.write(new_key)
    return new_key


@dataclass
class DatabaseSettings:
    db_type: DBType = os.getenv("DB_TYPE", "sqlite").lower()  # type: ignore
    # SQLite
    db_file: str = os.getenv("DB_FILE", "app.db")
    # MySQL / PostgreSQL
    db_host: str = os.getenv("DB_HOST", "127.0.0.1")
    db_port: int = int(os.getenv("DB_PORT", "3306"))
    db_user: str = os.getenv("DB_USER", "root")
    db_password: str = os.getenv("DB_PASSWORD", "")
    db_name: str = os.getenv("DB_NAME", "anticap")

    @property
    def database_url(self) -> str:
        if self.db_type == "sqlite":
            return f"sqlite+aiosqlite:///./{self.db_file}"
        elif self.db_type == "mysql":
            return (
                f"mysql+asyncmy://{self.db_user}:{self.db_password}"
                f"@{self.db_host}:{self.db_port}/{self.db_name}"
            )
        elif self.db_type == "pgsql":
            return (
                f"postgresql+asyncpg://{self.db_user}:{self.db_password}"
                f"@{self.db_host}:{self.db_port}/{self.db_name}"
            )
        raise ValueError(f"Unsupported DB_TYPE: {self.db_type}")

    @property
    def connect_args(self) -> dict:
        if self.db_type == "sqlite":
            return {"check_same_thread": False}
        # MySQL 连接池配置
        if self.db_type == "mysql":
            return {
                "charset": "utf8mb4",
            }
        return {}

    @property
    def engine_kwargs(self) -> dict:
        base = {}
        if self.db_type == "sqlite":
            base["echo"] = False
        elif self.db_type in ("mysql", "pgsql"):
            base["pool_size"] = 10
            base["max_overflow"] = 20
            base["pool_recycle"] = 3600
            base["pool_pre_ping"] = True
        return base


db_settings = DatabaseSettings()

SECRET_KEY: str = get_secret_key()
ALGORITHM: str = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES: int = 1 * 60 * 24 * 60  # 60 days

DESCRIPTION: str = """
* 通过Http协议 跨语言调用AntiCAP

<img src="https://img.shields.io/badge/GitHub-ffffff"></a> <a href="https://github.com/81NewArk/AntiCAP-WebApi"> <img src="https://img.shields.io/github/stars/81NewArk/AntiCAP-WebApi?style=social"> 

"""

APP_TITLE: str = "AntiCAP-WebApi"
APP_VERSION: str = "1.1.2"

BANNER: str = f"""
    +--------------------------------------------------------------------------------------+
    |                         Github: https://github.com/81NewArk                          |
    |                                Version: 1.1.2                                        |
    |                          Database: {db_settings.db_type.ljust(44)}|
    +--------------------------------------------------------------------------------------+
    |  免责声明：                                                                           |
    |  本项目基于MIT开源协议发布,欢迎自由使用,修改和分发,但必须遵守中华人民共和国法律法规。       |
    |  使用本项目即表示您已阅读并同意以下条款:                                                |
    |  1.合法使用:不得将本项目用于任何违法,违规或侵犯他人权益的行为。                           |
    |  2.风险自负:任何因使用本项目而产生的法律责任由使用者自行承担，项目作者不承担责任。          |
    |  3.禁止滥用:不得将本项目用于黑产或其他不当商业用途                                       |
    |  使用视为同意上述条款,如不同意请立即停止使用并删除本项目。                                |
    +--------------------------------------------------------------------------------------+
"""