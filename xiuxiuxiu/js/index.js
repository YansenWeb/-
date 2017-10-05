var han=0,tang=0,song=0,ming=0,qing=0,weibi=0,liuliang=0;

//背景音乐
var music=document.getElementById("music");

// han = 1;
// tang = 1; 
// song = 1; 
// ming = 1; 
// qing = 1; 

function getName(num,name){
  if(num){
    $("." + name + " img").attr("src","img/"+ name +".png");
    $("." + name + " span").show().html("X"+num);
  }
}

getName(han,"han");
getName(tang,"tang");
getName(song,"song");
getName(ming,"ming");
getName(qing,"qing");

$(".rule_btn").click(function(){
  $(".rule2").css({"opacity":1,"z-index":13}).show();
  $(".opacity_bg").show();
})

$(".rule .close").click(function(){
  $(".rule2").hide();
  $(".opacity_bg").hide();
})

$(".start_btn").click(function(){
  $(".rule1").css({"opacity":1,"z-index":13}).show();
  $(".opacity_bg").show();
})

var agree_flag = 0; //当等于1时，提交按钮才可以点
$(".tel input").keyup(function(){
  var iphone = $(".tel input").val();
  if(iphone){
    agree_flag = 1;
    $(".agree_btn").attr("src","img/agree_btn.png")
  }else{
     agree_flag = 0;
    $(".agree_btn").attr("src","img/agree_btn_h.png")
   
  }

})

$(".agree_btn").click(function(){
  // 判断手机号是否正确
  if(agree_flag===0){
    return false;
  }
  var iphone = $(".tel input").val();
  if((/^1[3|4|5|8][0-9]\d{4,8}$/.test(iphone))){
    location.href ="game.html";
  }else{
    alert("手机号码错误");
  }
})

//继续
$(".continue").click(function(){
  $(".opacity_bg").hide();
  $(".xiuxiu_result").hide();
})

$(".collect_btn").click(function(){
  location.href = "collect-han.html";
})

$(".open_btn").click(function(){
   if( han && tang && song && ming && qing){
     location.href = "prize.html";
   }else{
      alert("条件不满足！")
   }
})

// 随机出现数组
var biArr = ["fail","liuliang10","weijinbi","han","tang","song","ming","qing"]
var biLen = biArr.length;




function xiuxiu(){
    var random = Math.round(Math.random()*(biLen-1));
  $(".opacity_bg").show()
  $(".xiuxiu_result").fadeIn(500).css({"top":"233px","background":"url(img/xiuxiu/bg.png) no-repeat"});
  switch(random){
  case 0:
      $(".light").hide();
      break;
  case 1:
      liuliang++;
      getName(liuliang,"liuliang");
      break;    
  case 2:
      $(".xiuxiu_result").css({"top":"163px","background":"url(img/xiuxiu/bg1.png) no-repeat"});
      weibi++;
      getName(weibi,"weibi");
      break;
  case 3:
      han++;
      getName(han,"han");
      break;
  case 4:
      tang++;
      getName(tang,"tang");
      break;
  case 5:
      song++;
      getName(song,"song");
      break;
  case 6:
      ming++;
      getName(ming,"ming");
      break;
  case 7:
      qing++;
      getName(qing,"qing");
      break;
  default:
      break;
  }
  $(".xiuxiu_result .qianbi").attr("src","img/xiuxiu/" + biArr[random] + ".png" );
  if(han && tang && song && ming && qing){
    $(".open_btn").attr("src","img/open_btn.png");
  }else{
    $(".open_btn").attr("src","img/open_btn_h.png")
  } 
}
var t;
touch.on('.xiuxiu_btn','touchstart', function(ev) {
  $(".xiuxiu_btn").css({"opacity":0.9,"pointer-events":"none"});
  music.play();
  $(".touch-box").hide();
  $(".fly").addClass("touch");

  t = setTimeout(function(){
     xiuxiu();
     $(".fly").removeClass("touch");
     $(".xiuxiu_btn").css({"opacity":1,"pointer-events":""});
   },1000)
});


