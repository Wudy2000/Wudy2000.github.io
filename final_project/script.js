function showSection(sectionId) {
    // 1. 隱藏所有區塊
    const views = document.querySelectorAll('.view');
    views.forEach(v => v.classList.add('hidden'));

    // 2. 顯示目標區塊
    const target = document.getElementById(sectionId);
    if (target) target.classList.remove('hidden');

    // 3. 更新頁面標題
    const title = document.getElementById('main-title');
    const titleMap = {
        'entry-view': "產品的旅程：從消費到循環",
        'food-intro': "飲食現況：便利背後的代價",
        'land-pollution': "陸地篇：垃圾的終點",
        'ocean-pollution': "海洋篇：無聲的威脅",
        'improvement-view': "行動篇：我們可以做的改變"
    };
    if (titleMap[sectionId]) title.innerText = titleMap[sectionId];
    
    // 每次切換回到頁面頂端
    window.scrollTo(0, 0);
}
