/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery', "swiper", 'nav'], function($, swiper, nav, zoom) {
    var liWidth = $(".scroll-container .box").width() / 4;
    var scrollLen = $(".scroll-container li").length;
    var scrollWidth = scrollLen * liWidth;
    var i = 0;

    var flag = 1;
    var w = $(".band-title").width();

   $(window).resize(function(){
     liWidth = $(".scroll-container .box").width() / 4;
     // scrollLen = $(".scroll-container li").length;
     scrollWidth = scrollLen * liWidth;    
   })

    $(".band-title").css("left",-w);
    $(".band-banner").click(function() {
        w = $(".band-title").width();
        if (flag) {
            flag = 0;
            $(".band-title").stop().animate({ left: 0 }, 1000);
        } else {
            flag = 1;
            $(".band-title").stop().animate({ left: -w }, 1000);
        }
    })


    $(".scroll-container .button-next").click(function() {
        if (i < scrollLen - 1) {
            i++;
            $(".scroll-container li").removeClass("cut");
            $(".scroll-container li").eq(i).addClass("cut");
            if (i < scrollLen - 3) {
                $(".scroll-container .box ul").animate({ "left": -i * liWidth });
            }
        }
    })

    $(".scroll-container .button-prev").click(function() {
        if (i > 0) {
            i--;
            $(".scroll-container li").removeClass("cut");
            $(".scroll-container li").eq(i).addClass("cut");
            if (i < 3) {
                $(".scroll-container .box ul").animate({ "left": -i * liWidth });
            }
        }
    })


    $(".scroll-container li").click(function() {
        var $this = $(this);
        i = $this.index();
        cutFun(i);
    })


    function cutFun(i) {
        $(".scroll-container li").removeClass("cut");
        $(".scroll-container li").eq(i).addClass("cut");
        if (i < scrollLen - 3) {
            if (i <= 3 && i >= 1) {
                $(".scroll-container .box ul").animate({ "left": -(i - 1) * liWidth });
                return false;
            }
            $(".scroll-container .box ul").animate({ "left": -i * liWidth });
        }
    }
});
