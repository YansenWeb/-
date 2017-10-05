/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery',"swiper",'nav'], function($,swiper,nav) {
 
    // honor  
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        loop:true
    });

       $(".tab li").click(function(){
     var $this = $(this),
         index = $(this).index();

      $(".history-list .tab li").removeClass("active");  
      $this.addClass("active");

      $(".tab-box>div").hide();
      $(".tab-box>div").eq(index).show();
   })

   $(".video-list li").click(function(){
      var $this = $(this);
      $("#video").attr("src",$this.attr("src"));
   })
    
});
