/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery'], function ($){

	//二级菜单
    $(".menu li").hover(function(){
        $(this).find("dl").slideDown();
    },function(){
        $(this).find("dl").slideUp();
    }) 
   
   // 搜索
   $(".sreach-btn").click(function(){
      var V =  $(".sreach-text").val();
      if(!V){
        alert("1");
      }else{
      	alert("不符合搜索条件！");
      }
   })
});