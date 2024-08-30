const swiper = new Swiper(".homepage_img", {
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
   delay: 5000,
 },

});