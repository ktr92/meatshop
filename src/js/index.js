$(document).ready(function () {
  //new WOW().init();

  $('.cardrating').each(function () {
    $(this).find('span.stars-active').css('width', $(this).text() * 11.2);
});

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


  const blockslider = $(".blockslider__container").each(() => {
      new Swiper($(this), {
        navigation: {
          nextEl: $(this).closest('.blockslider').find(".blockslider-button-next"),
          prevEl: $(this).closest('.blockslider').find(".blockslider-button-prev"),
        },
      })
    });
});
