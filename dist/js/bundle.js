/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},i={};$(document).ready((function(){$("html, body").on("mousedown",(function(e){"string"==typeof e.target.className&&e.target.className.indexOf("adm")<0&&(e.stopPropagation(),$(e.target).closest(".dropdown-select").length||$(".dropdown-select .dropdown-select__title.opened").click())})),$(".js-mobilefilter").on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".catalogpage__aside").toggleClass("active")})),$((function(){window.innerWidth>1023&&$(window).resize()})),$(window).width()>1023?$("#dmenu").dmenu({menu:{align:"left"},item:{bg:!1,border:!1,subindicator:!0,fit:[{items:null,fitter:"icon-hide",order:"all"},{items:null,fitter:"icon-only",order:"all"},{items:":not(.dm-item_align-right)",fitter:"submenu",order:"rtl"},{items:":not(.dm-item_align-right)",fitter:"hide",order:"rtl"}]},submenu:{arrow:!1,border:!1,shadow:!0},subitem:{bg:!0,border:!1}}):$(".arrowmenu").click((function(){$(".headermenu__wrapper").animate({scrollLeft:"+=126px"})})),$("button.mainmenubtn").on("click",(function(e){$(this).toggleClass("active"),$(".mainmenu").toggleClass("active")})),$(".cardrating").each((function(){$(this).find("span.stars-active").css("width",11.2*$(this).text())})),$("input[type=tel]").mask("+7 (999) 999 99 99");const e=new Swiper(".mainswiperpreview",{spaceBetween:9,scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:"auto",mousewheel:!0,direction:"vertical",freeMode:!0,watchSlidesProgress:!0});new Swiper(".mainswiper",{effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e},pagination:{el:".mainslider-pagination",clickable:!0}}),$(".productslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:1,swipe:!1,nextArrow:$(this).closest(".productslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".productslider").find(".sliderarrows__left"),responsive:[{breakpoint:1530,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:1023,settings:{variableWidth:!0}}]})})),$(".recipeslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:4,slidesToScroll:1,infinite:!0,swipe:!1,nextArrow:$(this).closest(".recipeslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".recipeslider").find(".sliderarrows__left"),responsive:[{breakpoint:1530,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})})),$(".imgslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:6,slidesToScroll:1,infinite:!0,nextArrow:$(this).closest(".imgslider").find(".beyond-button-next"),prevArrow:$(this).closest(".imgslider").find(".beyond-button-prev"),responsive:[{breakpoint:1530,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{dots:!0,slidesToShow:3,slidesToScroll:1}}]})})),new Swiper(".blockslider__container",{pagination:{el:".blockslider-pagination",clickable:!0},navigation:{nextEl:".blockslider-button-next",prevEl:".blockslider-button-prev"}}),$(window).width()<1024&&$(".productcard__images_mobile .productcard__img").slick({dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1})})),function(e){e((function(){e(".js-tabsheader").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tabscontent").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),(()=>{"use strict";e.r(i)})()})();
//# sourceMappingURL=bundle.js.map