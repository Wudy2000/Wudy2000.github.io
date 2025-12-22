function showSection(sectionId) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.add('hidden'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.remove('hidden');

    const title = document.getElementById('main-title');
    // 更新標題邏輯
    const titleMap = {
        'entry-view': "海洋保護與循環生活",
        'food-intro': "飲食現況：便利背後的代價",
        'land-pollution': "陸地篇：垃圾的終點",
        'ocean-pollution': "海洋篇：無聲的威脅",
        'improvement-view': "行動篇：我們可以做的改變"
    };
    
    if (titleMap[sectionId]) {
        title.innerText = titleMap[sectionId];
    }
}
