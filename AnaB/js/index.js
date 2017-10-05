var tMusic = document.getElementById("time"), //倒计时声音
    cMusic = document.getElementById("click"), //点击按钮的声音
    Fial = document.getElementById("fial"), //游戏失败结束声音
    bgmusic = document.getElementById("bgmusic"), //背景音乐
    arr = ["wash", "senium", "allergy"], //对应三种产品 补水、抗衰老、抗过敏
    pointerPositon = ["50", "260", "484"], //三种手型出现的位置的左坐标
    ta_img, //随机类型人物图片
    ta_num, //随机类型数字
    score = 0, //分数
    vTime, //关卡时间设定
    game_t, //游戏关卡计时
    flag = true; //音乐开关，默认true;


$("#wrap").show();

// 九款产品随机出现
function pro_random() {
    var pro_random = Math.floor(Math.random() * 9) + 1;
    $(".share .product").attr("src", "img/product" + pro_random + ".png");
}

/**
 * 关卡计时
 * 时间小于50%时，背景颜色变红
 * 前九关时间小于70%时,指示显示
 * 时间等于0时，背景色清空，显示结束页面
 */
function timeFun(i) {
    var s = i;
    game_t = setInterval(function() {
        s--;
        var percent = (s / i) * 100;
        if (percent <= 50) {
            $(".progress-bar div").css("background-color", "#ed7474");
        }
        if (percent <= 70 && score < 9) {
            $(".pointer").show();
        }
        $(".progress-bar div").height(percent + "%");
        if (s == 0) {
            clearInterval(game_t);
            $(".progress-bar div").css("background-color", "");
            FialFun();
        }
    }, 100)
}

// 音乐自动播放判断
function audioAutoPlay(id) {
    var audio = document.getElementById(id);
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function() {
        audio.play();
    }, false);
}

/**
 * 前九关人物指定，之后人物随机
 * 九关之后，提示效果隐藏
 */
function RanFun() {
    var ranImg;
    var ranNum;
    switch (score) {
        case 0:
            ranImg = 0;
            ranNum = 1;
            break;
        case 1:
            ranImg = 2;
            ranNum = 2;
            break;
        case 2:
            ranImg = 1;
            ranNum = 3;
            break;
        case 3:
            ranImg = 2;
            ranNum = 3;
            break;
        case 4:
            ranImg = 0;
            ranNum = 2;
            break;
        case 5:
            ranImg = 1;
            ranNum = 2;
            break;
        case 6:
            ranImg = 1;
            ranNum = 1;
            break;
        case 7:
            ranImg = 2;
            ranNum = 1;
            break;
        case 8:
            ranImg = 0;
            ranNum = 3;
            break;
        default:
            ranImg = Math.floor(Math.random() * arr.length);
            ranNum = Math.floor(Math.random() * 3) + 1;
    }

    if (ta_img == ranImg && ta_num == ranNum) {
        RanFun();

    } else {

        $(".game-box img").attr("src", "img/" + arr[ranImg] + "-" + ranNum + ".png");
        $(".pointer").css("left", pointerPositon[ranImg] + "px");

        if (score >= 9) {
            $(".yun").hide();
        }

        $(".yun").attr("src", "img/" + arr[ranImg] + "-tips.png");

        ta_img = ranImg;
        ta_num = ranNum;
    }

}

// 游戏结束
function overFun() {
    $(".over").hide();
    $(".share").show();
}

/**
 * 点击错误，游戏结束
 * 失败音乐响起
 * gameover页面显示
 * 分数判断显示哪款优惠券
 */
function FialFun() {
    if (flag) {
        Fial.muted = false;
        Fial.play();
    }
    $(".over").show();
    if (score <= 39) {
        $(".use-quan").attr("src", "img/use20.png");
    } else if (40 < score && score < 69) {
        $(".use-quan").attr("src", "img/use80.png");
    } else if (score >= 70) {
        $(".use-quan").attr("src", "img/use100.png");
    }
    $("#score").html(score);
}


/*
 * 倒计开始倒计时，
 * 倒计时结束游戏画面显示
 * 云动效开启，
 * 计时条100%，
 * 手指提示显示
 */
function countDownFun() {
    var num = 3;
    tMusic.play();
    var t = setInterval(function() {
        num--;
        if (num) {
            $(".tips-num .num").attr("src", "img/num" + num + ".png")
        } else {
            $(".tips-num").hide();
            $(".yun").addClass("scale");
            $(".progress-bar div").height("100%");
            $(".pointer").show();
            clearInterval(t);
        }
    }, 1000);
}

//游戏结束，参数重置
function resetFun() {
    score = 0, time = 5, num = 3, ta_img = '', ta_num = '';
    $("#wrap>div").hide();
    $(".game .num-score span").html("x0");
    $(".tips-num .num").attr("src", "img/num3.png");
    $(".yun").removeClass("scale");
    $(".over-img").attr("src", "img/timeout.png");
    $(".progress-bar div").css("background-color", "");
    $(".pointer").hide();
    RanFun();
    pro_random();
}


// 背景音乐控制bar
$(".on").click(function() {
    if (flag) {
        //音效关闭
        $(this).css('background-image', 'url(img/sound_off.png)');
        flag = false;
        tMusic.muted = true;
        cMusic.muted = true;
        Fial.muted = true;
        bgmusic.muted = true;
    } else {
        //音效开启
        $(this).css('background-image', 'url(img/sound_on.png)');
        flag = true;
        tMusic.muted = false;
        cMusic.muted = false;
        Fial.muted = false;
        bgmusic.muted = false;
    }
})

// 排行榜
$(".ranking-list-btn").click(function() {
    $(".ranking-list").css({ "visibility": "visible", "display": "block" });
})

// 规则
$(".rule-btn").click(function() {
    $(".rule").show();
})

// 规则关闭
$(".rule span").click(function() {
    $(".rule").hide();
})

// 返回首页
$(".back-home").click(function() {
    $("#wrap>div").hide();
    $(".cover").show();
})

// 开始游戏
$(".start-btn").click(function() {
    $(".cover").hide();
    $(".game").show();
    $(".tips-num").show();
    countDownFun();
})

// 游戏btn
$(".game-btn-box .btn").click(function() {
    var that = $(this);
    var that_index = that.index();
    if (that_index == ta_img) {
        cMusic.play();
        score++;
        $(".tx-box .tx").attr("src", "img/" + arr[ta_img] + ta_num + ".png").addClass("opscale");
        $(".progress-bar div").css("background-color", "");
        $(".pointer").hide();
        that.find(".pro").show().addClass("scale-rotate");
        $(".game-box img").addClass("scale1");

        //前九关 4秒切换
        //九关之后每关减0.1秒
        //小于0.3秒不再减   
        if (score <= 9) {
            vTime = 40;

        } else if (10 <= score && vTime > 3) {
            vTime--;
        } else if (vTime < 3) {
            vTime = 3;
        }
        clearInterval(game_t);
        timeFun(vTime);

        setTimeout(function() {
            $(".tx-box .tx").removeClass("opscale");
            that.find(".pro").hide().removeClass("scale-rotate");
            $(".game-box img").removeClass("scale1");
            $(".num-score span").html("x" + score);
            RanFun();
        }, 300)
    } else {
        $(".over-img").attr("src", "img/fault.png");

        FialFun();
        clearInterval(game_t);
    }
})

// 领取优惠券
$(".over .get-btn").click(function() {
    overFun();
})

// 使用优惠券
$(".user-btn").click(function() {
    location.href = "https://www.taobao.com/";
})

// 参数重置,游戏倒计时
$(".over .once").click(function() {
    resetFun();
    countDownFun();
    $(".tips-num").show();
    $(".game").show();
})


// 参数重置，返回首页
$(".share .once").click(function() {
    resetFun();
    $(".cover").show();
})

// 随机产品
pro_random();

audioAutoPlay('fial');
fial.muted = true;

audioAutoPlay('bgmusic');
RanFun();
$(".tx-box .tx").attr("src", "img/" + arr[ta_img] + ta_num + ".png");
