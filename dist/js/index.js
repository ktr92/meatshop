function mobileAccordeon(){$(window).width()<1024&&$(".infobadge__main").on("click",(function(){$(this).toggleClass("active"),$(this).closest(".infobadge").find(".infobadge__accordeon").slideToggle()}))}$(document).ready((function(){function e(e,i){$(document).click((function(t){$(t.target).closest(`${e},${i}`).length||($(i).removeClass("active"),$(e).removeClass("active"))})),$(document).keyup((function(t){"Escape"===t.key&&($(i).removeClass("active"),$(e).removeClass("active"))}))}function i(e,i,t,s){window.innerWidth>=767?e&&window.addEventListener("scroll",(i=>{scroll=window.scrollY,scroll>=e?document.getElementById(t).classList.add(s):document.getElementById(t).classList.remove(s)})):i&&window.addEventListener("scroll",(e=>{scroll=window.scrollY,scroll>=i?document.getElementById(t).classList.add(s):document.getElementById(t).classList.remove(s)}))}$(".js-mobilefilter").on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".catalogpage__aside").toggleClass("active")})),$("button.mainmenubtn").on("click",(function(e){$(this).toggleClass("active"),$(".mainmenu").toggleClass("active")})),$(".haederbanner__close").on("click",(function(e){e.preventDefault(),$(this).closest(".haederbanner").hide()})),$(".productcard .cardrating").each((function(){$(this).find("span.stars-active").css("width",11.2*$(this).find(".cardrating__value").text())})),$(".detailinfo__reviews .cardrating").each((function(){$(this).find("span.stars-active").css("width",$(this).find(".cardrating__value").text()*($(this).find(".fa-star").width()+2))})),$(".reviews__rating .cardrating").each((function(){$(this).find("span.stars-active").css("width",18*$(this).find(".cardrating__value").text())})),$("input[type=tel]").mask("+7 (999) 999 99 99"),$(".quantity").on("click",".quantity-plus",(function(e){!function(e){e.preventDefault();var i=$(e.target).data("field"),t=$(e.target).closest("div"),s=parseInt(t.find("input[name="+i+"]").val(),10);isNaN(s)?t.find("input[name="+i+"]").val(1):t.find("input[name="+i+"]").val(s+1)}(e)})),$(".quantity").on("click",".quantity-minus",(function(e){!function(e){e.preventDefault();var i=$(e.target).data("field"),t=$(e.target).closest("div"),s=parseInt(t.find("input[name="+i+"]").val(),10);!isNaN(s)&&s>1?t.find("input[name="+i+"]").val(s-1):t.find("input[name="+i+"]").val(1)}(e)})),hoverSlider.init({}),$((function(){window.innerWidth>1023&&$(window).resize()})),$(window).width()>1023?$("#dmenu").dmenu({menu:{align:"left"},item:{bg:!1,border:!1,subindicator:!0,fit:[{items:null,fitter:"icon-hide",order:"all"},{items:null,fitter:"icon-only",order:"all"},{items:":not(.dm-item_align-right)",fitter:"submenu",order:"rtl"},{items:":not(.dm-item_align-right)",fitter:"hide",order:"rtl"}]},submenu:{arrow:!1,border:!1,shadow:!0},subitem:{bg:!0,border:!1}}):$(".arrowmenu").click((function(){$(".headermenu__wrapper").animate({scrollLeft:"+=126px"})})),function(){const e=new Swiper(".mainswiperpreview",{spaceBetween:9,scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:"auto",mousewheel:!0,direction:"vertical",freeMode:!0,watchSlidesProgress:!0});new Swiper(".mainswiper",{effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e},pagination:{el:".mainslider-pagination",clickable:!0}})}(),function(){const e=new Swiper(".detailswiperpreview",{spaceBetween:9,scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:"auto",mousewheel:!0,direction:"vertical",freeMode:!0,watchSlidesProgress:!0});new Swiper(".detailswiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e},pagination:{el:".detailslider-pagination",clickable:!0}}),$((function(){$(".zoom-box").each((function(){$(this).zoom()}))}))}(),new Swiper(".blockslider__container",{pagination:{el:".blockslider-pagination",clickable:!0},navigation:{nextEl:".blockslider-button-next",prevEl:".blockslider-button-prev"}}),$(window).width()<1024&&$(".productcard__images_mobile .productcard__img").slick({dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1}),$(".imgslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:6,slidesToScroll:1,infinite:!0,nextArrow:$(this).closest(".imgslider").find(".beyond-button-next"),prevArrow:$(this).closest(".imgslider").find(".beyond-button-prev"),responsive:[{breakpoint:1530,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{dots:!0,slidesToShow:3,slidesToScroll:1}}]})})),$(".recipeslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:4,slidesToScroll:1,infinite:!0,swipe:!1,nextArrow:$(this).closest(".recipeslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".recipeslider").find(".sliderarrows__left"),responsive:[{breakpoint:1530,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})})),$(".productslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:1,swipe:!1,nextArrow:$(this).closest(".productslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".productslider").find(".sliderarrows__left"),responsive:[{breakpoint:1530,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:1023,settings:{variableWidth:!0}}]})})),$(".productslider__modalslider").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,swipe:!1,nextArrow:$(this).closest(".productslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".productslider").find(".sliderarrows__left"),responsive:[{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})})),mobileAccordeon(),$(document).click((function(e){$(e.target).closest(".dropdown-select__list,.dropdown-select__title").length||$(".dropdown-select__list").hide()})),$(document).keyup((function(e){"Escape"===e.key&&$(".dropdown-select__list").hide()})),e(".mainmenu",".mainmenubtn"),e(".catalogpage__aside",".js-mobilefilter"),i(!1,750,"mobpriceFixed","fixed"),i(300,!1,"headermain","fixed"),i(300,!1,"headercontainer","fixed")})),function(e){e((function(){e(".js-tabsheader").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tabscontent").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),function(e){e((function(){e(".producttabs__header ul").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.producttabs").find("div.producttabs__content").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery);