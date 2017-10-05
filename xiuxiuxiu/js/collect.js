var han,tang,song,ming,qing;

han = 1;
tang = 1; 
song = 1; 
ming = 1; 
qing = 1; 

function getName(num,name){
  if(num){
    $("." + name + " .bi").attr("src","img/"+ name +".png");
    $("." + name + " span").show().html("X"+num);
  }
}

getName(han,"han");
getName(tang,"tang");
getName(song,"song");
getName(ming,"ming");
getName(qing,"qing");

$(".qianbi .han").click(function(){ location.href = "collect-han.html" })
$(".qianbi .tang").click(function(){ location.href = "collect-tang.html" })
$(".qianbi .song").click(function(){ location.href = "collect-song.html" })
$(".qianbi .ming").click(function(){ location.href = "collect-ming.html" })
$(".qianbi .qing").click(function(){ location.href = "collect-qing.html" })


if( han && tang && song && ming && qing){
  $(".open_btn1").attr("src","img/open_btn.png").addClass("open_btn")
}

$(".open_btn").on("click",function(){
  location.href = "prize.html";
})

$(".mycollect").click(function(){
  $(".collect").show();
  $(".exchange").hide();
})

$(".send_f").click(function(){
  $(".collect").hide();
  $(".exchange").show();
})

$(".confirm_btn").click(function(){
   $(".share").show();
})

$(".share").click(function(){
   $(".share").hide();
})

$(".back").click(function(){
   location.href = "game.html";
})

