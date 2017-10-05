define(['jquery', 'nav', 'area'], function($, nav, area) {


    $(".map .list a").click(function() {
        var $this = $(this);
        var index = $this.index();
        $(".map .list a").removeClass("active");
        $this.addClass("active");

    })

    //地域选择 
    _init_area();
});
