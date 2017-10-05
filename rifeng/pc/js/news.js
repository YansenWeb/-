/**
* Created by Jenson on 2017/7/13.
*/
define(['jquery', "swiper", 'nav', "banner"], function ($, swiper, nav, banner) {
    // banner  
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        loop: true
    });

    //    $(".tab li").click(function () {
    //        var $this = $(this),
    //   	     index = $(this).index();

    //        $(".tab li").removeClass("active");
    //        $this.addClass("active");

    //        $(".news-box>div").hide();
    //        $(".news-box>div").eq(index).show();
    //    })
});