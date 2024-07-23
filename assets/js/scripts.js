document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-highlights", {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      546: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },

    pagination: {
      el: ".swiper-pagination",
    },
  });
});
