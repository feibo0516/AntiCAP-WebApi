import os
import uvicorn

from app.config import BANNER
from app.main import app, configure_logging

if __name__ == '__main__':
    port = int(os.getenv("APP_PORT", "80"))
    print(f"Running on port {port}")
    print(BANNER)
    configure_logging()
    uvicorn.run(app, host="0.0.0.0", port=port, access_log=True)