// شبیه‌سازی درخواست‌های شبکه با تأخیر تصادفی (I/O-Bound)
function fetchUser() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "Parsa" }), 2000));
}
function fetchPosts() {
    return new Promise(resolve => setTimeout(() => resolve([{ title: "Post 1" }, { title: "Post 2" }]), 2000));
}

// ❌ ضدالگو: اجرای متوالی (Sequential) - جمعاً ۴ ثانیه
async function wrongWay() {
    console.time("Wrong Sequential");
    const user = await fetchUser();      // ۲ ثانیه
    const posts = await fetchPosts();    // ۲ ثانیه دیگر (جمعاً ۴)
    console.timeEnd("Wrong Sequential");
    return { user, posts };
}

// ✅ راه‌حل درست: اجرای همزمان با Promise.all - جمعاً ۲ ثانیه
async function correctWay() {
    console.time("Correct Concurrent");
    const userPromise = fetchUser();
    const postsPromise = fetchPosts();
    const [user, posts] = await Promise.all([userPromise, postsPromise]);
    console.timeEnd("Correct Concurrent");
    return { user, posts };
}

// اجرای تست
(async () => {
    await wrongWay();
    await correctWay();
})();
