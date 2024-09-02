const swiper = new Swiper(".homepage_img", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,

  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

    // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
   delay: 3000,
 },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    }
  }

});