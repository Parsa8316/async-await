import asyncio
import time

# شبیه‌سازی یک درخواست شبکه با تأخیر ۱ ثانیه
async def fetch_data(id: int):
    print(f"Starting request {id}")
    await asyncio.sleep(1)  # منتظر I/O (مثل API call)
    print(f"Finished request {id}")
    return f"Data {id}"

# ❌ حالت اشتباه: پشت‌سرهم (Total = 10 ثانیه)
async def wrong_sequential():
    start = time.time()
    results = []
    for i in range(10):
        result = await fetch_data(i)
        results.append(result)
    print(f"Sequential Time: {time.time() - start:.2f}s")

# ✅ حالت درست: همزمان (Total = ~1 ثانیه)
async def correct_concurrent():
    start = time.time()
    tasks = [fetch_data(i) for i in range(10)]
    results = await asyncio.gather(*tasks)
    print(f"Concurrent Time: {time.time() - start:.2f}s")

# اجرا
asyncio.run(wrong_sequential())
asyncio.run(correct_concurrent())
