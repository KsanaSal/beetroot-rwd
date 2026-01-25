document.querySelectorAll(".js-search").forEach((search) => {
    const btn = search.querySelector(".js-search-btn");
    const input = search.querySelector(".js-search-input");

    // blur — один раз
    input.addEventListener("blur", () => {
        search.classList.remove("is-active");
    });

    btn.addEventListener("click", (e) => {
        e.stopPropagation();

        // закриваємо всі інші пошуки
        document.querySelectorAll(".js-search").forEach((el) => {
            if (el !== search) el.classList.remove("is-active");
        });

        search.classList.toggle("is-active");

        if (search.classList.contains("is-active")) {
            input.focus();
        }
    });
});

// один глобальний клік
document.addEventListener("click", () => {
    document
        .querySelectorAll(".js-search")
        .forEach((el) => el.classList.remove("is-active"));
});
