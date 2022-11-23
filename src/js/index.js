$(document).ready(function () {
  //new WOW().init();
/* 
  $('.mainmenu__level_2').css('height', $('.mainmenuLevelOne').outerHeight(true))
  $('.mainmenuLevelTwo').css('height', $('.mainmenuLevelOne').outerHeight(true))
 */

  


  // close select
  $("html, body").on('mousedown', function(e){
    if(typeof e.target.className == 'string' && e.target.className.indexOf('adm') < 0)
    {
      e.stopPropagation();

      if(!$(e.target).closest('.dropdown-select').length)
      {
        $('.dropdown-select .dropdown-select__title.opened').click();
      }
    }
  })
/**/

$('.js-mobilefilter').on('click', function(e) {
  e.preventDefault()
  $(this).toggleClass('active')
  $('.catalogpage__aside').toggleClass('active')
})

  
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
    
  $('.productcard .cardrating').each(function () {
    $(this).find('span.stars-active').css('width', $(this).find('.cardrating__value').text() * 11.2);
  });
  $('.detailinfo .cardrating').each(function () {
    $(this).find('span.stars-active').css('width', $(this).find('.cardrating__value').text() * 18);
  });
  $('.reviews__rating .cardrating').each(function () {
    $(this).find('span.stars-active').css('width', $(this).find('.cardrating__value').text() * 18);
  });

  $("input[type=tel]").mask("+7 (999) 999 99 99");

  function incrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

	  if (!isNaN(currentVal)) {
		parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
	  } else {
		parent.find('input[name=' + fieldName + ']').val(1);
	  }
	}

	function decrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

	  if (!isNaN(currentVal) && currentVal > 1) {
		parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
	  } else {
		parent.find('input[name=' + fieldName + ']').val(1);
	  }
	}

	$('.quantity').on('click', '.quantity-plus', function(e) {
	  incrementValue(e);
	});

	$('.quantity').on('click', '.quantity-minus', function(e) {
	  decrementValue(e);
	});

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

  function detailsliderInit() {
    const swiper = new Swiper(".detailswiperpreview", {
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
    const swiper2 = new Swiper(".detailswiper", {
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
        el: ".detailslider-pagination",
        clickable: true
      },  
      
    });

    $(function(){
      $(".zoom-box").each(function() {
        $(this).zoom();
      })
    })
  }

  detailsliderInit()


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
  $('.productslider__modalslider').each(function() {
    $(this).slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    nextArrow: $(this).closest('.productslider').find('.sliderarrows__right'),
    prevArrow: $(this).closest('.productslider').find('.sliderarrows__left'),
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 3,
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

 
(function($) {
  $(function() {
  
    $('.js-tabsheader').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.js-tabs').find('div.js-tabscontent').removeClass('active').eq($(this).index()).addClass('active');
    });
  
  });
  })(jQuery);


  (function($) {
		$(function() {

			$('.producttabs__header ul').on('click', 'li:not(.active)', function() {
				$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('div.producttabs').find('div.producttabs__content').removeClass('active').eq($(this).index()).addClass('active');
			});

		});
		})(jQuery);