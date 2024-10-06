// const swiper = new Swiper(".homepage_img", {
//   loop: true,
//   grabCursor: true,
//   slidesPerView: 1,

//   pagination: {
//     // el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   autoplay: {
//     delay: 3000,
//   },

//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 1,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 1,
//     },
//   },
// });

const side_menu = document.getElementById("side_menu");
const hamburger_menu = document.getElementById("hamburger");
const cancel_menu = document.getElementById("cancel_menu");
const toggle = document.getElementById("toggle");
let isActive = true;
let click = 1;

hamburger_menu.addEventListener("click", () => {
  side_menu.style.display = "block";
  click++;
  if (isActive == true) {
    toggle.addEventListener("click", () => {
      side_menu.style.display = "none";
    });
  }
});

cancel_menu.addEventListener("click", () => {
  side_menu.style.display = "none";
});
