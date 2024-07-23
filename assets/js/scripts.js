document.addEventListener("DOMContentLoaded", function () {
  const btnBurger = document.querySelector(".btn-burger");
  const btnClose = document.querySelector(".btn-close");
  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".menu");
  const menuItems = menu.querySelectorAll("li");

  let tl = gsap.timeline({ paused: true, delay: -1 });

  tl.to(nav, {
    duration: 0.2,
    autoAlpha: 1,
    display: "flex",
    ease: "power2.inOut",
    onStart: () => (nav.style.display = "flex"),
    onReverseComplete: () => (nav.style.display = "none"),
  }).from(
    menuItems,
    {
      duration: 0.5,
      opacity: 0,
      y: 100,
      stagger: 0.1,
      ease: "power2.inOut",
    },
    "-=0.3"
  );

  btnBurger.addEventListener("click", function () {
    tl.play(0);
    btnClose.style.display = "flex";
  });

  btnClose.addEventListener("click", function () {
    this.style.display = "none";
    tl.reverse();
  });

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

  document.querySelectorAll(".swiper-blog").forEach(function (el) {
    new Swiper(el, {
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: el.querySelector(".swiper-pagination"),
      },
    });
  });
});
