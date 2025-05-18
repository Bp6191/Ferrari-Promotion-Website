document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");

    let scrollAmount = 0;

    prevButton.addEventListener("click", () => {
        const itemWidth = document.querySelector(".carousel-item").offsetWidth;
        scrollAmount = Math.max(scrollAmount - itemWidth, 0);
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

    nextButton.addEventListener("click", () => {
        const itemWidth = document.querySelector(".carousel-item").offsetWidth;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        scrollAmount = Math.min(scrollAmount + itemWidth, maxScroll);
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });
});
