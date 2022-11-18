$(document).ready(function () {
  //new WOW().init();
/* 
  $('.mainmenu__level_2').css('height', $('.mainmenuLevelOne').outerHeight(true))
  $('.mainmenuLevelTwo').css('height', $('.mainmenuLevelOne').outerHeight(true))
 */

  
  $(function() {
    if (window.innerWidth > 1023) {
      $(window).resize();
    }
  });
  
  if ($( window ).width() > 1023) {
      $('#dmenu').dmenu({
        menu 	: {
          align			: 'left'
        },
        item	: {
          bg				: false,
          border 			: false,
          subindicator	: true,

          fit			: [
            {
              items 		: null,
              fitter 		: 'icon-hide',
              order		: 'all'
            },
            {
              items 		: null,
              fitter 		: 'icon-only',
              order		: 'all'
            },
            {
              items 		: ':not(.dm-item_align-right)',
              fitter 		: 'submenu',
              order		: 'rtl'
            },
            {
              items 		: ':not(.dm-item_align-right)',
              fitter 		: 'hide',
              order		: 'rtl'
            }
          ]
        },
        submenu	: {
          arrow			: false,
          border			: false,
          shadow			: true
        },
        subitem	: {
          bg				: true,
          border			: false
        }

      });
    } else {
      $('.arrowmenu').click(function () {
        $( ".headermenu__wrapper" ).animate({
          scrollLeft: '+=126px'
        });
      });
    }
  
  
    $('button.mainmenubtn').on('click', function(e) {
      $(this).toggleClass('active')
      $('.mainmenu').toggleClass('active')
    })
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
    pagination: {
      el: ".mainslider-pagination",
      clickable: true
    },  
    
  });
  $('.productslider__slider').each(function() {
    $(this).slick({
    dots: false,
    arrows: true,
    infinite: true,
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
          slidesToScroll: 1,
        }
      },
    
      {
        breakpoint: 1023,
        settings: {
          variableWidth: true
        }
      },
     
    ]
  })
})
  $('.recipeslider__slider').each(function() {
    $(this).slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipe: false,
    nextArrow: $(this).closest('.recipeslider').find('.sliderarrows__right'),
    prevArrow: $(this).closest('.recipeslider').find('.sliderarrows__left'),
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
  $('.imgslider__slider').each(function() {
    $(this).slick({
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: $(this).closest('.imgslider').find('.beyond-button-next'),
    prevArrow: $(this).closest('.imgslider').find('.beyond-button-prev'),
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 3,
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

    if ($(window).width() < 1024) {
      $('.productcard__images_mobile .productcard__img').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      })
    }  

});
