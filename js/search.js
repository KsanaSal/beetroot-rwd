document.querySelectorAll(".js-search").forEach((search) => {
    const btn = search.querySelector(".js-search-btn");
    const input = search.querySelector(".js-search-input");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();

        search.classList.toggle("is-active");
    });

    search.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

document.addEventListener("click", () => {
    document
        .querySelectorAll(".js-search")
        .forEach((el) => el.classList.remove("is-active"));
});
