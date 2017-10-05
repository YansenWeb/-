/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery','imagezoom'], function ($,imagezoom){
 
    // $(".jqzoom").imagezoom();
    
    $("#thumblist li").click(function(){
        $(this).addClass("tb-selected").siblings().removeClass("tb-selected");
        $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
        $(".jqzoom").attr('rel',$(this).find("img").attr("big"));
    });

   $(".zoom-btn").click(function(){
       $(".posDiv").show();
       $(".posDiv img").attr("src",$(".jqzoom").attr("rel"));
   })

});