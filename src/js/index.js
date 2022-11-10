$(document).ready(function () {
  //new WOW().init();

  $("input[type=tel]").mask("+7 (999) 999 99 99");

  const swiper = new Swiper(".mainswiperpreview", {
    spaceBetween: 9,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: "auto",
    mousewheel: true,
    direction: 'vertical',
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".mainswiper", {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

});
