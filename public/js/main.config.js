
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});