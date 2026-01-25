const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

if (burgerBtn && mobileMenu && overlay) {
    function toggleMenu() {
        burgerBtn.classList.toggle("is-active");
        mobileMenu.classList.toggle("is-open");
        overlay.classList.toggle("is-active");
        document.body.classList.toggle("no-scroll"); // блокуємо скрол при відкритому меню
    }

    burgerBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
}
