<div align="center">

# AntiCAP-WebApi

## Version 1.1.2

</div>

## 🌍 环境说明
```
python >= 3.8 64bit

# pyjwt库可能不支持低版本python 推荐使用3.10.6版本 

# https://registry.npmmirror.com/-/binary/python/3.10.6/python-3.10.6-amd64.exe

```

<div align="center">

## 📁 手动安装

</div>



```
# 1.Git克隆仓库 或 手动下载
git clone https://github.com/81NewArk/AntiCAP-WebApi

# 2.进入项目目录
cd AntiCAP-WebApi

# 3.使用清华源下载项目所需依赖
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

# 4.运行项目
python main.py

# 5.默认端口为6688，初始化账号密码均为admin

# 6.访问Web主页和开发者文档：
http://127.0.0.1:6688/
http://localhost:6688/

http://127.0.0.1:6688/docs
http://localhost:6688/docs


```

<div align="center">

## 🤖 自动安装

</div>

```
# 1.Git克隆仓库 或 手动下载
git clone https://github.com/81NewArk/AntiCAP-WebApi

# 2.根据系统 选择运行 Run-Windows.bat或 Run-Linux.sh 会自动安装所需依赖并运行项目

# 3.默认端口为6688 初始化账号密码均为admin

```


<div align="center">

## 🗄️ 数据库配置

本项目支持 **SQLite** / **MySQL** / **PostgreSQL** 三种数据库，通过环境变量切换。

</div>

### 默认: SQLite (无需配置)
默认使用 SQLite，数据库文件 `app.db` 自动创建在项目根目录，无需任何额外配置。

### 切换为 MySQL
```bash
# Windows PowerShell
$env:DB_TYPE="mysql"
$env:DB_HOST="192.168.1.100"
$env:DB_PORT="3306"
$env:DB_USER="root"
$env:DB_PASSWORD="your_password"
$env:DB_NAME="anticap"
python main.py

# Linux / macOS
export DB_TYPE=mysql
export DB_HOST=192.168.1.100
export DB_PORT=3306
export DB_USER=root
export DB_PASSWORD=your_password
export DB_NAME=anticap
python main.py
```

### 切换为 PostgreSQL
```bash
# Windows PowerShell
$env:DB_TYPE="pgsql"
$env:DB_HOST="192.168.1.100"
$env:DB_PORT="5432"
$env:DB_USER="postgres"
$env:DB_PASSWORD="your_password"
$env:DB_NAME="anticap"
python main.py

# Linux / macOS
export DB_TYPE=pgsql
export DB_HOST=192.168.1.100
export DB_PORT=5432
export DB_USER=postgres
export DB_PASSWORD=your_password
export DB_NAME=anticap
python main.py
```

### 环境变量一览

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `DB_TYPE` | `sqlite` | 数据库类型: `sqlite` / `mysql` / `pgsql` |
| `DB_FILE` | `app.db` | SQLite 数据库文件路径 |
| `DB_HOST` | `127.0.0.1` | MySQL / PostgreSQL 主机地址 |
| `DB_PORT` | `3306` | MySQL / PostgreSQL 端口 |
| `DB_USER` | `root` | 数据库用户名 |
| `DB_PASSWORD` | (空) | 数据库密码 |
| `DB_NAME` | `anticap` | 数据库名称 |

> **注意**: 使用 MySQL 或 PostgreSQL 时，请确保已提前创建好对应的数据库（不会自动创建数据库，只自动创建表结构）。


<div align="center">

## 📂 项目结构

</div>

```
AntiCAP-WebApi/
├── main.py                    # 入口文件
├── database.py                # 数据库兼容层
├── requirements.txt           # 依赖列表
├── secret.key                 # JWT 密钥(自动生成)
├── Run-Windows.bat            # Windows 一键启动
├── Run-Linux.sh               # Linux 一键启动
├── static/                    # 前端静态资源
└── app/                       # 应用核心
    ├── main.py                # FastAPI 应用工厂
    ├── config.py              # 全局配置 + 数据库配置
    ├── dependencies.py        # 依赖注入(认证/鉴权/扣点)
    ├── models/
    │   ├── database.py        # SQLAlchemy ORM 模型
    │   └── schemas.py         # Pydantic 请求/响应模型
    ├── routers/
    │   ├── auth.py            # 认证路由(注册/登录/验证)
    │   ├── admin.py           # 管理路由(用户/注册码/扣点)
    │   └── captcha.py         # 验证码路由(OCR/检测/滑块/旋转/极验)
    ├── services/
    │   └── auth.py            # 认证业务逻辑
    └── utils/
        ├── security.py        # JWT + 密码哈希工具
        └── lock.py            # 异步KeyedLock工具
```


<div align="center">

## 📄 使用说明

### 本项目支持本地，局域网，公网部署

</div>

```
# 早期版本录制的视频，但是内容大致适用

https://www.bilibili.com/video/BV1xYGgz9ENE
```


<br>
<br>
<br>


## ❌ 缺少系统DLL报错解决方案

### 大部分服务器或家庭系统缺少模型推理必要的DLL，请根据需要安装。




| 系统架构      | 下载链接 |
|:----------| :--------- | 
| **ARM64** | https://aka.ms/vs/17/release/vc_redist.arm64.exe |
| **x64**   | https://aka.ms/vs/17/release/vc_redist.x64.exe| 
| **参考地址**  | https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170|