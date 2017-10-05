// JavaScript Document
// 查看排名
$('.paiming-btn,.scrose-btn').click(function(){
   $(".opacity_bg").fadeIn(200);
   $(".rank").fadeIn(200);
})

// 首页进入
$('.start_btn,.cover .start-btn').click(function(){
  $(".opacity_bg,.cover,.rank").fadeOut(200)
  $(".page2").fadeIn(200);

  $(".page2 .text").addClass("animate");
  setTimeout(function(){
    var i = 0;
    $(".page2 .dogs img").eq(0).fadeIn(100);
    setInterval(function(){
     i++;
     $(".page2 .dogs img").eq(i).fadeIn(100);
     if(i>=3){
        setTimeout(function(){
            $(".page2").fadeOut(100);
            $(".page3").fadeIn(100);
        },1000)
     }
    },100)

  },5000)
  
})

// 下一步
$(".page3 .next").click(function(){
   $(".page3").fadeOut(200);
   $(".page4").fadeIn(200);
})

// 规则查看
$(".rule-btn").click(function(){
  $(".rule1").fadeIn(200);
  $(".opacity_bg").fadeIn(200);
})


var soundplay=1;
var music=document.getElementById("music");
// music.pause();

// 游戏开始
var score = 0;
var time = 30;
$(".page4 .start-btn").click(function(){
    music.play();
   $(".page4").fadeOut(200);
   $(".page5").fadeIn(200);
   // 计时
   var t = setInterval(function(){
    time--;
    $(".time i").width( time/30*100 + "%");
    if(time <= 0){
        clearInterval(t);
        $("#con").empty();
        $(".opacity_bg").fadeIn(200)
        $(".form").fadeIn(200);
        $(".crose").html(score);
        music.pause();
    }
   },1000)
   
   // 游戏
    function ran_func(e){
        var top = Math.random()*1200;
        var ran_lef = Math.random()*490;
        // var speed = Math.random()*10 + 10;
        setInterval(function(){
           if(top >= 1200 || e.css("display") == "none" ){
             top = -150;
             e.show().css("pointer-events","");
             ran_lef = Math.random()*490;
             // speed = Math.random()*10 + 10;
           }else{
             top += 10; 
           } 
           e.css({"left":ran_lef,"top":top}); 
        },60)
    }

    var item0 = new ran_func($(".crose0"));    
    var item1 = new ran_func($(".crose1"));    
    var item2 = new ran_func($(".crose2"));    
    var item3 = new ran_func($(".crose3"));    
    var item4 = new ran_func($(".crose4"));    
    var item5 = new ran_func($(".crose5"));    
    var item6 = new ran_func($(".crose6"));    
    var item7 = new ran_func($(".crose7"));    
    var item8 = new ran_func($(".crose8"));    
    var item9 = new ran_func($(".crose9"));    
    var item10 = new ran_func($(".crose10"));    
 

    $("#con img").click(function(){
        $(".dog").show();
        var _this = $(this);
        console.log(_this);
        var text = _this.attr("data-score");
        score = score + parseInt(text);
        $(".points span").html(score);
        var pos = _this.offset();
        if(_this.attr("class") == "crose0" || _this.attr("class") == "crose6"  ){
           $("#con").empty();
           $(".opacity_bg").fadeIn(200)
           $(".form").fadeIn(200);
           $(".crose").html(score);
           music.pause();
           time = 0;
        }
        $("#pos").css(pos);
        _this.hide().css("pointer-events","none");
    })    


})

// 表单提交
$(".ture-btn").click(function(){
  $(".form").fadeOut(200);
  $(".alert-box").fadeIn(200);
})

// 在玩一次
$(".next-once").click(function(){
    location.href = location.href;
})

// 提示分享
$(".share-btn").click(function(){
  $(".opacity_bg").fadeOut(200);
  $(".share").fadeIn(200);
})

// 分享提示关闭
$(".share").click(function(){
    $(this).fadeOut(200);
    $(".opacity_bg").fadeIn(200);
})

// 活动规则关闭并返回
$(".back-btn").click(function(){
    $(".rule1").fadeOut(200);
    $(".opacity_bg").fadeOut(200);
})