import uvicorn

from app.config import BANNER
from app.main import app, configure_logging

if __name__ == '__main__':
    print(BANNER)
    configure_logging()
    uvicorn.run(app, host="0.0.0.0", port=6688, access_log=True)