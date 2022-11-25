/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var i={r:i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})}},e={};$(document).ready((function(){$(".js-mobilefilter").on("click",(function(i){i.preventDefault(),$(this).toggleClass("active"),$(".catalogpage__aside").toggleClass("active")})),$("button.mainmenubtn").on("click",(function(i){$(this).toggleClass("active"),$(".mainmenu").toggleClass("active")})),$(".productcard .cardrating").each((function(){$(this).find("span.stars-active").css("width",11.2*$(this).find(".cardrating__value").text())})),$(".detailinfo__reviews .cardrating").each((function(){$(this).find("span.stars-active").css("width",$(this).find(".cardrating__value").text()*($(this).find(".fa-star").width()+2))})),$(".reviews__rating .cardrating").each((function(){$(this).find("span.stars-active").css("width",18*$(this).find(".cardrating__value").text())})),$("input[type=tel]").mask("+7 (999) 999 99 99"),$(".quantity").on("click",".quantity-plus",(function(i){!function(i){i.preventDefault();var e=$(i.target).data("field"),t=$(i.target).closest("div"),s=parseInt(t.find("input[name="+e+"]").val(),10);isNaN(s)?t.find("input[name="+e+"]").val(1):t.find("input[name="+e+"]").val(s+1)}(i)})),$(".quantity").on("click",".quantity-minus",(function(i){!function(i){i.preventDefault();var e=$(i.target).data("field"),t=$(i.target).closest("div"),s=parseInt(t.find("input[name="+e+"]").val(),10);!isNaN(s)&&s>1?t.find("input[name="+e+"]").val(s-1):t.find("input[name="+e+"]").val(1)}(i)})),hoverSlider.init({}),$((function(){window.innerWidth>1023&&$(window).resize()})),$(window).width()>1023?$("#dmenu").dmenu({menu:{align:"left"},item:{bg:!1,border:!1,subindicator:!0,fit:[{items:null,fitter:"icon-hide",order:"all"},{items:null,fitter:"icon-only",order:"all"},{items:":not(.dm-item_align-right)",fitter:"submenu",order:"rtl"},{items:":not(.dm-item_align-right)",fitter:"hide",order:"rtl"}]},submenu:{arrow:!1,border:!1,shadow:!0},subitem:{bg:!0,border:!1}}):$(".arrowmenu").click((function(){$(".headermenu__wrapper").animate({scrollLeft:"+=126px"})})),function(){const i=new Swiper(".mainswiperpreview",{spaceBetween:9,scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:"auto",mousewheel:!0,direction:"vertical",freeMode:!0,watchSlidesProgress:!0});new Swiper(".mainswiper",{effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:i},pagination:{el:".mainslider-pagination",clickable:!0}})}(),function(){const i=new Swiper(".detailswiperpreview",{spaceBetween:9,scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:"auto",mousewheel:!0,direction:"vertical",freeMode:!0,watchSlidesProgress:!0});new Swiper(".detailswiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:i},pagination:{el:".detailslider-pagination",clickable:!0}}),$((function(){$(".zoom-box").each((function(){$(this).zoom()}))}))}(),new Swiper(".blockslider__container",{pagination:{el:".blockslider-pagination",clickable:!0},navigation:{nextEl:".blockslider-button-next",prevEl:".blockslider-button-prev"}}),$(window).width()<1024&&$(".productcard__images_mobile .productcard__img").slick({dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1}),$(".imgslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:6,slidesToScroll:1,infinite:!0,nextArrow:$(this).closest(".imgslider").find(".beyond-button-next"),prevArrow:$(this).closest(".imgslider").find(".beyond-button-prev"),responsive:[{breakpoint:1530,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{dots:!0,slidesToShow:3,slidesToScroll:1}}]})})),$(".recipeslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:4,slidesToScroll:1,infinite:!0,swipe:!1,nextArrow:$(this).closest(".recipeslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".recipeslider").find(".sliderarrows__left"),responsive:[{breakpoint:1530,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})})),$(".productslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:1,swipe:!1,nextArrow:$(this).closest(".productslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".productslider").find(".sliderarrows__left"),responsive:[{breakpoint:1530,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:1023,settings:{variableWidth:!0}}]})})),$(".productslider__modalslider").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,swipe:!1,nextArrow:$(this).closest(".productslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".productslider").find(".sliderarrows__left"),responsive:[{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})})),$(window).width()<1024&&$(".infobadge__main").on("click",(function(){$(this).toggleClass("active"),$(this).closest(".infobadge").find(".infobadge__accordeon").slideToggle()}))})),function(i){i((function(){i(".js-tabsheader").on("click","li:not(.active)",(function(){i(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tabscontent").removeClass("active").eq(i(this).index()).addClass("active")}))}))}(jQuery),function(i){i((function(){i(".producttabs__header ul").on("click","li:not(.active)",(function(){i(this).addClass("active").siblings().removeClass("active").closest("div.producttabs").find("div.producttabs__content").removeClass("active").eq(i(this).index()).addClass("active")}))}))}(jQuery),(()=>{"use strict";i.r(e)})()})();
//# sourceMappingURL=bundle.js.map