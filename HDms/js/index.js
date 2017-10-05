// JavaScript Document
var setlogin = 0;   //默认没有注册信息 默认值 0

var score = 0;
var time = 30;
var n = 1; //关卡


$(".page3 .back").click(function(){
 $(".page3").hide();
})

//活动规则
$('.rule_btn,.start_btn').click(function(){
    $(".page2").show();
})

//活动规则返回到首页
$('.page2 .back').click(function(){
    $(".page2").hide();
})

// 同意游戏规则，开始游戏
$(".agren_btn").click(function(){
    $(".page2").fadeOut(200);
    $(".round").fadeIn(200);
    Round();
    TimeFn();
})

$(".page3").click(function(){
   $(this).hide();
   $(".page7").show();
   $(".page7 span").html(score);
})

// 再玩一次
$(".page4 img").click(function(){
 $(".round").show();
 Round();
 TimeFn();
})

$(".ruselt_btn").click(function(){
   if(setlogin == 0){
    $(".page5").fadeIn(200);
   }else{
    $(".page6").fadeIn(200);
    cj();
   }
})

$(".cj_btn").click(function(){
  $(".page5").hide();
  $(".page7").show();
  cj();
})

$(".page7 .back,.page5 .back").click(function(){
  gameInit();
  $(".page").hide();
  $(".page1").show();
  $(".ruselt_btn").show();
  $(".page7 .third").hide();
  $(".page7 .second").hide();
  $(".page7 span").show();
})

$(".page6 .back").click(function(){
  $(".page6").hide();
})


function cj(){
  var ruselt = 2; //0是没中奖 1是一等奖 2是二等奖 3是三等奖
  $(".ruselt_btn").hide();
  $(".page7 span").hide();
  gameInit();
  switch(ruselt){
    // case 0:
    //   $(".page7 .fail").show();
    //   break;
    // case 1:
    //   $(".page7 .first").show();
    //   break;
    case 2:
      $(".page7 .second").show();
      break;
    case 3:
      $(".page7 .third").show();
      break;
  }
}

function gameInit(){
  // 初始化游戏变量
  score = 0;
  time = 30;
  n = 1; //关卡
  $("#time span").css("background-position","");
  $("#score span").css("background-position","");
  $(".round").css("background","");
}

function TimeFn(){
  var t = setInterval(function(){
    time--;

    if(time == 0&&score>=50&&n==1){//满足条件进入第二关
      clearInterval(t);
      n++;
      time = 30;
      $(".round").css("background","url(img/second_round.jpg) no-repeat left top");
      TimeFn();
    }else if(time == 0&&score>=150&&n==2){//满足条件进入第三关
      n++;
      time = 30;
      clearInterval(t);
      $(".round").css("background","url(img/third_round.jpg) no-repeat left top");
      TimeFn();
    }else if(time == 0&&n==3){
      clearInterval(t);
      $(".round").hide();
      $(".page3").fadeIn(200);//排行榜显示
    }else if(time == 0&&score<50&&n==1 || time == 0&&score<150&&n==2){
      clearInterval(t);
      gameInit();
      $(".round").hide();
      $(".page4").show();//游戏结束，再来一次
    }
    if(time<10){
      stime = "00" + time;
    }else if(time<100){
      stime = "0" + time;
    }else{
      stime = "" + time;      
    }
    var t1 = stime.split("")[0];
    var t2 = stime.split("")[1];
    var t3 = stime.split("")[2];
    $("#time span").eq(0).css("background-position",-t1*40)
    $("#time span").eq(1).css("background-position",-t2*40)
    $("#time span").eq(2).css("background-position",-t3*40)
  },1000)
}

function open(){
  $(".men-box .left").animate({left:"-160px"},1000);
  $(".men-box .right").animate({right:"-160px"},1000);
}

function close(){
  $(".men-box .left").animate({left:0},1000);
  $(".men-box .right").animate({right:0},1000); 
}


var t1;
clearInterval(t1);
  
function Round(){
  clearInterval(t1);
  open();
  t1 = setInterval(function(){
    if($(".men-box .left").css("left") >= "0px" ){
        open();
    }else{
        close();
    }
  },2000);  
} 

touch.on('.round', 'swipeup', function(ev){
  var _left = $(".men-box .left").css("left");
  $(".imgs img").eq(0).css({top:-150});
  setTimeout(function(){
    $(".imgs img:first").insertAfter($(".imgs img:last"))
    $(".imgs img:last").css("top",0);
    $(".imgs img:last").show();
    $(".hat,.jia").hide();
  },200)
  if( parseInt(_left) < -50 ){
    score++;
    var sscore; 
    if(score<10){
      sscore = "00" + score;
    }else if(score<100){
      sscore = "0" + score;
    }else{
      sscore = "" + score;      
    }
    var s1 = sscore.split("")[0];
    var s2 = sscore.split("")[1];
    var s3 = sscore.split("")[2];
    $("#score span").eq(0).css("background-position",-s1*40);
    $("#score span").eq(1).css("background-position",-s2*40);
    $("#score span").eq(2).css("background-position",-s3*40);
  }else if(parseInt(_left) < -10 ){
     $(".imgs img").eq(0).hide();
     $(".jia").show();
  }else{
     $(".imgs img").eq(0).hide();
     $(".hat").show();
  }
});
