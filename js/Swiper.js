document.addEventListener("DOMContentLoaded", () => {
  // 1) init Swiper
  const swiper = new Swiper(".swiper", {
    grabCursor: true,
    observer: true,
    paralax : true,
    loop : true,
    speed: 800,
    breakpoints: {
      360: { slidesPerView: 1.19, spaceBetween: 16 },

      540: { slidesPerView: 1.5 },
      768: { slidesPerView: 2.2, spaceBetween: 10 },
      912: { slidesPerView: 1.8, spaceBetween: 16 },
      1024: { slidesPerView: 2.6, spaceBetween: 16 },
      1380: { slidesPerView: 3, spaceBetween: 16 },
    },
  });
});
