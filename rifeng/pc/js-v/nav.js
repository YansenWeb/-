/**
* Created by Jenson on 2017/7/13.
*/
define(['jquery'], function ($) {

    //二级菜单
    $(".menu li").hover(function () {
        $(this).find("dl").stop().slideDown(200);
    }, function () {
        $(this).find("dl").stop().slideUp(200);
    });

    // 三级菜单
    $(".menu dd").hover(function(){
        $(this).find(".sub-menu").show();
    },function(){
        $(this).find(".sub-menu").hide();
    })

    // 搜索
    $(".sreach-btn").click(function () {
        var V = $(".sreach-text").val();
        if (!V) {
            window.location.href = "search.html";
        } else {
            alert("不符合搜索条件！");
        }
    })
});