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
  $('.productslider__slider').each(function() {
    $(this).slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: false,
    nextArrow: $(this).closest('.productslider').find('.sliderarrows__right'),
    prevArrow: $(this).closest('.productslider').find('.sliderarrows__left'),
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  })
})
  $('.recipeslider__slider').each(function() {
    $(this).slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: false,
    nextArrow: $(this).closest('.recipeslider').find('.sliderarrows__right'),
    prevArrow: $(this).closest('.recipeslider').find('.sliderarrows__left'),
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
})


  const blockslider = 
      new Swiper('.blockslider__container', {
        pagination: {
          el: ".blockslider-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".blockslider-button-next",
          prevEl: ".blockslider-button-prev",
        },
      })

    if (window.innerWidth < 1199) {
      $('.productcard__images_mobile .productcard__img').slick({
        dots: true,
        arrows: false
      })
    }  

});
