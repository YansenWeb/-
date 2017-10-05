/**
* Created by Jenson on 2017/7/13.
*/
define(['jquery', "banner", 'nav'], function ($, banner, nav) {

    $(".case-list .tab li").click(function () {
        var $this = $(this);
        var index = $this.index();
        $(".case-list .tab li").removeClass("active");
        $this.addClass("active");

        $(".case-box>div").hide();
        $(".case-box>div").eq(index).show();
    })
});
