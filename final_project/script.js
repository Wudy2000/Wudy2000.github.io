function showSection(sectionId) {
    // 隱藏所有區塊
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.add('hidden');
    });

    // 顯示指定區塊
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // 更新標題 (選做)
    const title = document.getElementById('main-title');
    if (sectionId === 'land-pollution') title.innerText = "陸地篇：塑膠的旅程";
    if (sectionId === 'ocean-pollution') title.innerText = "海洋篇：無聲的威脅";
    if (sectionId === 'entry-view') title.innerText = "海洋保護與循環生活";
}
