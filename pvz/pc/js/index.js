/**
 * Created by Jenson on 2017/9/11.
 */
$(function() {
    // 获取礼包流程
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width:115, //设置宽高
        height:115
    });

    var bodyHeight = $(window).height();
    if(sessionStorage.name){
       sessionStorage.name = ""
    }      
    // 导航动画效果
    $(".nav-bar a").click(function() {
        var thatID = $(this).attr("href");
        var h = 0;
        if (thatID == "#news" && bodyHeight <= 700) {
            h = 120;
        }
        if (thatID == "#form" && bodyHeight <= 700) {
            h = 140;
        }

        $("html, body").animate({
            scrollTop: $(thatID).offset().top + h + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


    //生日 
    $.ms_DatePicker({
        YearSelector: ".sel_year",
        MonthSelector: ".sel_month",
        DaySelector: ".sel_day"
    });

    $(".nav-bar a").click(function() {
        $(".nav-bar a").removeClass("nav-active");
        $(this).addClass("nav-active");
    })


    $("#botton-scroll").on('click','li',function() {
        var index = $(this).attr("data-index");
        $("._panel-box").css("top","0");
        $("#scroller").html($(".new-list" + index ).html());
        $("html,body").css("overflow", "hidden")
        $(".opa-bg").show();
        $(".news-pop").css("visibility", "visible");
    });

    $(".tq").click(function() {
        $("._panel-box").css("top","0");
        $("#scroller").html($(".protocol").html());
        $("html,body").css("overflow", "hidden")
        $(".opa-bg").show();
        $(".news-pop").css("visibility", "visible");
    });

    $(".news-pop .close").click(function() {
        $("html,body").css("overflow", "");
        $(".opa-bg").hide();
        $(".news-pop").css("visibility", "hidden");
    })


    function selectClassFun(e) {
        $(e).click(function() {
            var index = $(this).index();
            $(e).removeClass("active");
            $(this).addClass("active");

            // 只做值判断，没有意义
            if (e === ".question1") {
                $("#question1").val(index);
            }

            if (e === ".question2") {
                $("#question2").val(index);
            }

            if (e === ".input") {
                $("#system").val($(this).attr("data-attr"));
            }
        })
    }

    selectClassFun(".question1");
    selectClassFun(".question2");
    selectClassFun(".input");


    $(".agreen-btn").click(function() {
        if ($(".agreen-btn").hasClass("hasactive")) {
            $(".agreen-btn").removeClass("hasactive");
        } else {
            $(".agreen-btn").addClass("hasactive");
        }
    });

    $(".reg .close").click(function() {
        $(".reg").css("visibility", 'hidden');
        $(".opa-bg").hide();
    })

    $(".result-box .close").click(function() {
        $(".result-box").hide();
        $(".opa-bg").hide();
    })

    $(".share .back").click(function() {
        $(".share").hide();
        $(".result-box").show();
    })

    $(".success .back").click(function() {
        $(".success").hide();
        $(".result-box").show();
    })


    $('#result').click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var question1 = $("#question1").val();
        var question2 = $("#question2").val();
        var month = Number($(".sel_month").val());
        var date = Number($(".sel_day").val());
        var hasactive = $(".agreen-btn").hasClass("hasactive");
        // var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        if (name == '') {
            alert("请填写您的名字！");
            return false;
        }
        // if (!regex.test(email)) {
        //     alert("邮箱地址不正确！");
        //     return false;
        // }
        if (!question1) {
            alert("请回答第一题！");
            return false;
        }
        if (!question2) {
            alert("请回答第二题！");
            return false;
        }
        if (!hasactive) {
            alert("请阅读规则！");
            return false;
        }
        $(".result-box .name").html(name);
        $(".opa-bg").show();
        $(".result-box").show();
        xingzuo(month, date);
        qrcode.makeCode("http://weixin.net-show.cn/EA_17Moden/ptw/index.html?constellation=shuiping1&text=dafs");
    });

    function addImgsrc(name, num) {
        $(".twelve").attr("src", "img/twelve/" + name + num + ".png");
    }

    // 星座
    function xingzuo(month, date) {
        if (month == 1 && date >= 20 || month == 2 && date <= 18) {
            //水瓶
            var arr = [1, 1, 1, 1, 1, 1, 2, 2, 3, 3];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("shuiping", num)
        }
        if (month == 2 && date >= 19 || month == 3 && date <= 20) {
            // value = "双鱼座"; 
            var arr = [2, 2, 2, 2, 2, 2, 3, 3, 1, 1];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("shuangyu", num)

        }
        if (month == 3 && date >= 21 || month == 4 && date <= 19) {
            // value = "白羊座";
            var arr = [2, 2, 2, 2, 2, 2, 3, 3, 1, 1];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("baiyang", num)

        }
        if (month == 4 && date >= 20 || month == 5 && date <= 20) {
            // value = "金牛座";
            var arr = [3, 3, 3, 3, 3, 3, 2, 2, 1, 1];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("niu", num)
        }
        if (month == 5 && date >= 21 || month == 6 && date <= 21) {
            // value = "双子座";
            var arr = [1, 1, 1, 1, 1, 1, 2, 2, 3, 3];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("shuangzi", num)
        }
        if (month == 6 && date >= 22 || month == 7 && date <= 22) {
            // value = "巨蟹座";
            var arr = [3, 3, 3, 3, 3, 3, 2, 2, 1, 1];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("juxie", num)
        }
        if (month == 7 && date >= 23 || month == 8 && date <= 22) {
            // value = "狮子座";
            var arr = [3, 3, 3, 3, 3, 3, 2, 2, 1, 1];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("shizi", num)
        }
        if (month == 8 && date >= 23 || month == 9 && date <= 22) {
            // value = "处女座";
            var arr = [3, 3, 3, 3, 3, 3, 2, 2, 1, 1];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("chunv", num)
        }
        if (month == 9 && date >= 23 || month == 10 && date <= 22) {
            // value = "天秤座";
            var arr = [1, 1, 1, 1, 1, 1, 2, 2, 3, 3];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("tianping", num)
        }
        if (month == 10 && date >= 23 || month == 11 && date <= 21) {
            // value = "天蝎座";
            var arr = [1, 1, 1, 1, 1, 1, 2, 2, 3, 3];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("tianxie", num)
        }
        if (month == 11 && date >= 22 || month == 12 && date <= 21) {
            // value = "射手座";
            var arr = [1, 1, 1, 1, 1, 1, 2, 2, 3, 3];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("sheshou", num)
        }
        if (month == 12 && date >= 22 || month == 1 && date <= 19) {
            // value = "摩羯座";
            var arr = [3, 3, 3, 3, 3, 3, 2, 2, 1, 1];
            var num = arr[Math.floor(Math.random() * arr.length)];
            addImgsrc("mojie", num)
        }
    }


    // 领取奖励
    $(".get-btn").click(function() {
        //临时判断,当值不为空是，跳过注册 
        if(sessionStorage.name){
            $(".success").show();
            $(".result-box").hide();
        }else{
           $(".result-box").hide();
           $(".reg").css("visibility", 'visible');
        }

    })

    //分享按钮 
    $(".share-btn").click(function() {
        $(".result-box").hide();
        $(".share").show();
    })

    // 点击复制功能
    var clipboard = new Clipboard('.copy-btn');

    clipboard.on('success', function(e) {
        console.log(e);
        alert("复制成功！")
    });

    clipboard.on('error', function(e) {
        console.log(e);
        alert("复制失败!,请ctrl+c复制")
    });

    // 新闻列表滚动
    $(".new-box1").superSlider({
        prevBtn:     ".prev",//左按钮
        nextBtn:     ".next",//右按钮
        listCont:    "#roll",//滚动列表外层
        // scrollWhere: "prev",//自动滚动方向next
        // delayTime:   1000,//自动轮播时间间隔
        speed:       300,//滚动速度
        amount:      1,//单次滚动数量
        showNum:     3,//显示数量
        // autoPlay:    true//自动播放
    });

// 判断屏幕高度
var flag = true;
var midea = document.getElementById("midea");
$(window).scroll(function() {
    if($(document).scrollTop()>800&&flag){
      flag = false;
      midea.play();
      // console.log(video);
    }
});


});
