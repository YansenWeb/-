/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery', 'banner', 'news', "nav"], function($,banner, news, sreach) {
    var basePath = "",
        len = $(".news-list li").length,
        h = $(".news-list li").height(),
        i = 0;

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
