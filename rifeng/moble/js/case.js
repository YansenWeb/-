/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery',"swiper",'nav'], function($,swiper,nav) {
 
    // banner  
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        loop:true
    });


   $(".case-list .tab li").click(function(){
   	  var $this = $(this);
   	  var index = $this.index();
      $(".case-list .tab li").removeClass("active"); 
   	  $this.addClass("active");

   	  $(".case-box>div").hide();
   	  $(".case-box>div").eq(index).show();
   })



});
