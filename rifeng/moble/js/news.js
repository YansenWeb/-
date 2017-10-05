/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery','swiper'], function ($,swiper){

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


   $(".tab li").click(function(){
   	 var $this = $(this),
   	     index = $(this).index();

   	  $(".tab li").removeClass("active");  
   	  $this.addClass("active");

   	  $(".news-box>div").hide();
   	  $(".news-box>div").eq(index).show();


   })

});