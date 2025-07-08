document.addEventListener('DOMContentLoaded', function() {

    // 1. ヘッダーのスクロールエフェクト
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. 採用情報ページのアコーディオン機能
    const positionItems = document.querySelectorAll('.position-item');
    if (positionItems.length > 0) {
        positionItems.forEach(item => {
            const header = item.querySelector('.position-header');
            header.addEventListener('click', () => {
                // クリックされたアイテムの open クラスを切り替える
                item.classList.toggle('open');
            });
        });
    }

    // 3. ハンバーガーメニューの機能
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.header-nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('open');
            hamburger.classList.toggle('open');
        });
    }

});
