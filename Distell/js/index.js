// JavaScript Document

$("#wrap").show();

$("#wrap1 .back").click(function() {
    window.location.href = "index.html";
})

$(".product").click(function() {
    window.location.href = "product.html";
})

$(".about").click(function() {
    window.location.href = "about.html";
})

$(".about-article .back").click(function() {
    // window.location.href = "about.html";
    window.history.go(-1);
})

var mySwiper = new Swiper('#slider2', {
    pagination: '.swiper-pagination',
    autoplay: 2500,
});

$(".back-btn").click(function() {
    window.location.href = "about.html";
})


var i = 0;
var len = $(".about-list ul").length;
$("#wrap1 .right-btn").click(function() {
    if (i < len - 1) {
        i++;
    } else {
        return false;
    }

    $(".about-list").animate({ "left": -i * 640 })
})

$("#wrap1 .left-btn").click(function() {
    if (i > 0) {
        i--;
    } else {
        return false;
    }

    $(".about-list").animate({ "left": -i * 640 })
})
