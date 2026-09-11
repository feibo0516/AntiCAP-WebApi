import asyncio
from typing import Dict


class KeyedLock:
    def __init__(self):
        self.locks: Dict[str, asyncio.Lock] = {}
        self._global_lock = asyncio.Lock()

    async def __call__(self, key: str) -> asyncio.Lock:
        async with self._global_lock:
            if key not in self.locks:
                self.locks[key] = asyncio.Lock()
            return self.locks[key]