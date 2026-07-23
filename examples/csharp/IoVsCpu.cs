using System;
using System.Diagnostics;
using System.Threading.Tasks;

class Program
{
    // شبیه‌سازی یک کار ورودی/خروجی (مثل دریافت از دیتابیس)
    static async Task<string> FetchDataAsync()
    {
        await Task.Delay(1000); // منتظر شبکه/دیسک (هیچ نخ فیزیکی درگیر نیست)
        return "Data Received";
    }

    // یک کار سنگین پردازشی (محاسبه فاکتوریل)
    static long HeavyCpuWork(int n)
    {
        long result = 1;
        for (int i = 2; i <= n; i++) result *= i;
        return result;
    }

    static async Task Main()
    {
        var stopwatch = Stopwatch.StartNew();

        // ✅ درست: کار I/O واقعی را با await غیرمسدودکننده اجرا کن
        var data = await FetchDataAsync();
        Console.WriteLine($"I/O Result: {data}");

        // ❌ اشتباه: اگر کار پردازشی را صرفاً در یک تابع async بگذاریم و 
        // await کنیم، هیچ نخ آزاد نمی‌شود (فقط اورهَد ماشین وضعیت را داریم).
        // (در اینجا برای نمایش، کار را مستقیم صدا می‌زنیم)
        var cpuResult = HeavyCpuWork(20);
        Console.WriteLine($"CPU Result: {cpuResult}");

        // ✅ راه‌حل واقعی برای CPU-Bound در سی‌شارپ: انتقال به نخ‌های پس‌زمینه
        var cpuResultAsync = await Task.Run(() => HeavyCpuWork(20));
        Console.WriteLine($"CPU Result (Background Thread): {cpuResultAsync}");

        Console.WriteLine($"Total Time: {stopwatch.ElapsedMilliseconds}ms");
    }
}
