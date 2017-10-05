/**
 * Created by Jason on 2017/7/13.
 */

define(['jquery', 'bxslider'], function($, bxslider) {

    //满屏Banner
    // var screeW = window.screen.width;
    // var screeH = window.screen.height;
    // $("#banner").css("height", screeW * 1800 / 957);
    var screeW = $(window).width();
    var screeH = $(window).height();
    var bannerH = $("#banner").attr("data") == "index" ? screeW / 1800 * 957 : screeW / 1200 * 500;
    $(".banner-wrap").css("height", bannerH);


    // $(document).ready(function() {
    $("#banner").css("height", bannerH);
    $('#banner').bxSlider({
        mode: 'fade',
        slideMargin: 0,
        auto: true,
    });
    $(".bx-viewport").css("height", bannerH);

    $(window).resize(function() {
            var screeW = $(window).width();
            // var screeH = $(window).height();
            var bannerH = $("#banner").attr("data") == "index" ? screeW / 1800 * 957 : screeW / 1200 * 500;
            $(".banner-wrap").css("height", bannerH);
            $(".bx-viewport").css("height", bannerH);
        })
        // $(".bx-viewport").css("height", bannerH);

    // 如果是首页就显示大尺寸图片
    // if($("#banner").attr("data") == "index" ){
    //    $("#banner").css("height", );
    // }else{
    //    $("#banner").css("height", screeW / 1200 * 500);
    //    $(".bx-viewport").css("height", screeW / 1200 * 500);
    // }



    // });

    //单图隐藏
    // var banli = $(".HomeBanner li").size();
    // if (banli <= 1) {
    //     $(".bx-controls").hide();
    // }
    //滚动
    // $(window).scroll(function() {
    //     winW = $(window).width();
    //     $("#banner").css("padding-top", "0px");
    //     $("#banner>div").each(function() {
    //         if (self.loaded == true) //图片加载完成
    //         {
    //             $(this).find("img").css("margin-top", -(winW * 1431 / 1920 - (winH - 70)) / 2 + "px");
    //         }
    //     })
    // })


});
