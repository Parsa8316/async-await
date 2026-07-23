// یک تابع ناهمگام که بعد از ۱ ثانیه خطا می‌دهد
async function riskyOperation() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    throw new Error("💥 خطای داخلی در عملیات ناهمگام!");
}

// ❌ ضدالگو: صدا زدن بدون await (Fire-and-Forget)
async function wrongCall() {
    try {
        riskyOperation(); // ⚠️ خطا در اینجا شکار نمی‌شود! چون Promise برگردانده شده اما منتظر نمی‌ماند.
        console.log("تابع صدا زده شد (اما خطرناک!)");
    } catch (err) {
        console.log("شکار شد؟ نه! این خط هرگز اجرا نمی‌شود.");
    }
}

// ✅ راه‌حل درست: حتماً await کنیم تا خطا به try-catch برسد
async function correctCall() {
    try {
        await riskyOperation(); // خطا به اینجا می‌رسد
    } catch (err) {
        console.log("✅ خطا با موفقیت شکار شد:", err.message);
    }
}

(async () => {
    console.log("--- اجرای حالت اشتباه ---");
    await wrongCall();
    // صبر می‌کنیم تا خطای ناامیدکننده در کنسول ظاهر شود (Unhandled Promise Rejection)
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("\n--- اجرای حالت درست ---");
    await correctCall();
})();
