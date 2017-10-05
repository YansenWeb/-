define(['jquery', 'swiper', 'news',"nav"], function($, swiper, news,sreach) {
    var basePath = "",
        len = $(".news-list li").length,
        h = $(".news-list li").height(),
        i = 0;

    //首页banner  
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        paginationClickable: true,
        // spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        // autoplayDisableOnInteraction: false,
        loop:true
    });


    // 循环滚动条 
    setInterval(function() {
        if (i < len - 1) {
            i++;
        } else {
            i = 0;
        }
        $(".news-list ul").animate({ "margin-top": -i * h }, 500);
    }, 4000)

    // 产品tab切换
    $(".pro-tab li").click(function() {
        var index = $(this).index();
        $(".pro-tab li").removeClass("active");
        $(this).addClass("active");

        $(".pro-box>div").hide();
        $(".pro-box>div").eq(index).show();
    })




});
