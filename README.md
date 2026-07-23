
# <div style="direction:rtl">Async/Await</div>

[![Language](https://img.shields.io/badge/Language-Persian-blue.svg)](https://github.com/your-username/async-await-deep-dive)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![PDF](https://img.shields.io/badge/Download-PDF-red.svg)](./paper/async-await-deep-dive.pdf)

><div style="direction:rtl"> **یک کالبدشکافی علمی و عملی از الگوی Async/Await:** بررسی سیر تکاملی از Callback‌ها تا ماشین‌های وضعیت، مقایسه‌ی پیاده‌سازی در ۴ اکوسیستم بزرگ (جاوااسکریپت، سی‌شارپ، پایتون و جاوا) و تحلیل ضدالگوهای مرگبار در تولید نرم‌افزارهای مقیاس‌پذیر.</div>

---

## 📌 چرا این ریپازیتوری را ساخته‌ام؟

بسیاری از توسعه‌دهندگان، `async/await` را صرفاً یک «شکر نحوی» برای زیبایی کد می‌دانند؛ اما حقیقت بسیار عمیق‌تر است. این ریپازیتوری حاصل یک پژوهش دانشگاهی در مقطع کارشناسی است که به **لایه‌های زیرین کامپایلر و سیستم‌عامل** نفوذ می‌کند و نشان می‌دهد که چگونه یک تابع ساده‌ی `async` در پشت صحنه به یک **ماشین وضعیت (State Machine)** تبدیل شده و با مکانیزم‌هایی مانند `epoll` (لینوکس) و `IOCP` (ویندوز) تعامل می‌کند تا بدون اشغال نخ‌های فیزیکی، از عهده‌ی میلیون‌ها درخواست همزمان برآید.

اگر به دنبال منبعی هستید که:
- سیر تکامل `Callback Hell` → `Promises` → `Async/Await` را با مثال توضیح دهد.
- تفاوت رفتار این الگو در **بارهای کاری I/O-Bound** در برابر **CPU-Bound** را کالبدشکافی کند.
- پیاده‌سازی آن را در **جاوااسکریپت (Event Loop)**، **سی‌شارپ (Thread Pool)**، **پایتون (asyncio + GIL)** و **جاوا (Project Loom)** مقایسه کند.
- **ضدالگوهای خطرناک** مانند *Fire-and-Forget*، *Sequential Await Trap* و *Function Coloring* را واکاوی کند.

...این ریپازیتوری دقیقاً برای شما نوشته شده است.

---

## 📂 ساختار مخزن (Repository Structure)

```text
async-await-deep-dive/
├── README.md                     # همین فایل
├── LICENSE                       # مجوز Creative Commons
├── paper/
│   └── async-await-deep-dive.pdf # مقاله‌ی کامل (نسخه نهایی)
├── examples/                     # کدهای عملی منطبق با مقاله
│   ├── javascript/
│   │   ├── sequential-vs-concurrent.js
│   │   └── fire-and-forget-danger.js
│   ├── csharp/
│   │   └── IoVsCpu.cs
│   └── python/
│       └── async_io_demo.py
└── assets/
    └── diagrams/                 # (در آینده) دیاگرام ماشین وضعیت و حلقه رویداد
