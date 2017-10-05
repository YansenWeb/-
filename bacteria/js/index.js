var ruleVal = 0; //第一次开始游戏显示游戏规则；
var m = 2000;//怪物出现的频率 

//背景音乐
var soundplay=1;
var music=document.getElementById("music");
$('.sound_icon').click(function(){
  if(soundplay==1)
    {
      soundplay=0;
      $('.sound_icon').css({'background-image':'url(img/sound_off.png)','background-position':'0px 55px'});
      music.pause();
    }
  else{
      soundplay=1;
      $('.sound_icon').css({'background-image':'url(img/sound_on.png)','background-position':'0px 50px'});
      music.play();
    
    }
});

$(".rank .start_btn").click(function(){
  $(".rank").fadeOut(200);
  $(".page5").fadeIn(200);
  $(".time .bar").width(210);
  $(".points span").text(0);
  // m = 3000;
  game();
})

function game(){
    // 初始化变量  
    var scrose = 0;
    var flag = 0;
    $("#con div").html("");
    //分数计算 1 == 50 分；2 == 20 分； 3 == 20 分
    var a = [1,2,3,1,1,1,1];
    //游戏时间30s;
    var time = 30;
    var aLen = a.length;
    //首次出现怪物的位置
    var dArr = [2,3,4,0,1,5,6];  
    function Func(cont){
        var d = setInterval(function(){
           var i = Math.round(Math.random()*(aLen-1));
           var scro = a[i] == 1 ? 50 : 20 ;

           $("#con div").eq(dArr[cont]).fadeIn(200).html("<img src='img/guai"+ a[i] +".png' width='273' height='229' data-score='"+ scro +"' />");
           if(cont == 6){
              clearInterval(d);
           }else{
             cont++;
           }
        },1000)
    }
    Func(0);

    // 游戏剩余时间
    var t = setInterval(function(){
      time > 0 ? time-- : 0 ;
      $(".time .bar").width(time*7);
      if(time == 0){
        clearInterval(t);
        $(".page5").fadeOut(200);
        $(".form").fadeIn(200);
        $(".crose span").text(scrose);
      }
    },1000)

    $("#con div").on("click",function(){
        if(flag){
          return false;
        }else{
        var that = $(this);
        var index = $(this).index();
        var s = parseInt(that.find("img").attr("data-score"));
        scrose += s;
        flag = 1;
        if(index == 0||index == 3 || index == 5 ){
          $(".qiang").css("transform","translateX(-10px)")
        }else if(index == 1||index == 4 || index == 6 ){
          $(".qiang").css("transform","translateX(10px)")
        }
        if(index == 0||index == 1 || index == 2 ){
          $(".qiang").css("transform","translateY(-10px)")
        }else if(index == 5 || index == 6 ){
          $(".qiang").css("transform","translateY(10px)")
        }
        $(".points span").text(scrose);
        setTimeout(function(){
          that.append('<img class="animated zoomIn star" src="img/star.png" width="166" height="161" >');
        },500)
        $(".hx").addClass("rotate"+(index+1));
        setTimeout(function(){
           $(".hx").removeClass("rotate"+(index+1));
           that.html("");
           flag = 0;
        },800);

        setTimeout(function(){
           //m = m == 100 ? 100 : m - 100;

           var i = Math.round(Math.random()*(aLen-1));
           console.log(m);
           var scro = a[i] == 1 ? 50 : 20 ;
           that.html("<img src='img/guai"+ a[i] +".png' width='273' height='229' data-score='"+ scro +"' />");
        },m)
       }
    })
}

$(".cover .start-btn").click(function(){
  $(".cover").fadeOut(200);
  if(!ruleVal){
    $(".rule").fadeIn(200);
  }else{
    $(".page2").fadeIn(200);
  }
})

$(".rule-btn").click(function(){
  $(".rule").fadeOut(200);
  $(".page2").fadeIn(200);
})

$(".page2 .step").click(function(){
  $(".page2").fadeOut(200);
  $(".page3").fadeIn(200);
})

$(".page3 .step").click(function(){
  $(".page3").fadeOut(200);
  $(".page4").fadeIn(200);
})

$(".page4").click(function(){
  $(".page4").fadeOut(200);
  $(".page5").fadeIn(200);
  game();
})

$(".paiming-btn").click(function(){
  $(".rank").fadeIn(200);
})

$(".share-btn").click(function(){
  $(".share").fadeIn(200);
})

$(".share").click(function(){
  $(this).fadeOut(200)
})

$(".scrose-btn").click(function(){
  $(".rank").fadeIn(200);
})

$(".ture-btn").click(function(){
  $(".form").fadeOut(200);
  $(".alert-box").fadeIn(200);
})


$(".rank .close").click(function(){
   $(".rank").hide();
})

var nPage = 1;
var len = $(".rank ul").length;
$(".rank .pre").click(function(){
   nPage < len  ? nPage++ : 1 ;  
   $(".rank ul").fadeOut();
   $(".rank ul").eq(nPage-1).fadeIn();;
})

$(".rank .next").click(function(){
   nPage > 1  ? nPage-- : len - 1;
   $(".rank ul").fadeOut(200);
   $(".rank ul").eq(nPage-1).fadeIn(200);;
})