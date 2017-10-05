/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery',"swiper",'nav'], function($,swiper,nav) {
 
   $(".object-banner").height($(window).width()/2.6);
   $(window).resize(function(){
     $(".object-banner").height($(window).width()/2.6);
   })

   $(".object-box .tab li").click(function(){
   	   var $this = $(this),
   	   index = $(this).index();
   	  $(".tab li").removeClass("active");  
   	  $this.addClass("active");

   	  $(".tab-box>div").hide();
   	  $(".tab-box>div").eq(index).show();
   })

});
