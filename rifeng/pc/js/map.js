define(['jquery', 'nav'], function ($, nav) {

    $(".map .list a").click(function () {
        var $this = $(this);
        var index = $this.index();
        $(".map .list a").removeClass("active");
        $this.addClass("active");
    })
});
