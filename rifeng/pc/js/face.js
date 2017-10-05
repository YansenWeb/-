/**
* Created by Jenson on 2017/7/13.
*/
define(['jquery', 'idangerous', 'nav'], function ($, idangerous, nav) {
    var imgW = $(".view .swiper-container img").width();
    var imgH = $(".view .swiper-container img").height();
    var previewW = (imgW - 100) / 4;
    $(".view .swiper-container").height(imgH);
    $(".preview .swiper-container").width(imgW - 100);
    $(".preview .swiper-container").height(previewW);
    $(".preview .swiper-container .swiper-slide").width(previewW);
    $(".preview .swiper-container .swiper-slide").height(previewW);
    var viewSwiper = new Swiper('.view .swiper-container', {

        onSlideChangeStart: function () {
            updateNavPosition();
        }
    })

    $('.view .arrow-left,.preview .arrow-left').on('click', function (e) {

        e.preventDefault()

        if (viewSwiper.activeIndex == 0) {
            viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
            return
        }
        viewSwiper.swipePrev();
    })

    $('.view .arrow-right,.preview .arrow-right').on('click', function (e) {
        e.preventDefault()
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.swipeTo(0, 1000);
            return
        }
        viewSwiper.swipeNext();
    })

    var previewSwiper = new Swiper('.preview .swiper-container', {
        visibilityFullFit: true,
        slidesPerView: 'auto',
        onlyExternal: true,
        onSlideClick: function () {
            viewSwiper.swipeTo(previewSwiper.clickedSlideIndex);
        }
    })

    function updateNavPosition() {
        $('.preview .active-nav').removeClass('active-nav')
        var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index() > previewSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
                previewSwiper.swipeTo(activeNav.index() - thumbsPerNav)
            } else {
                previewSwiper.swipeTo(activeNav.index());
            }
        }
    }
});
