/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery', "swiper", 'nav'], function($, swiper, nav, zoom) {

    // banner  
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        loop: true
    });

    $(".product-list .tab li").click(function() {

        var $this = $(this),
            index = $(this).index();

        $(".tab li").removeClass("active");
        $this.addClass("active");

        $(".prodcut-box>div").hide();
        $(".prodcut-box>div").eq(index).show();
    })


});
