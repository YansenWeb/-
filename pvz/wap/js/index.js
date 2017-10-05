/**
 * Created by Jason on 2017/9/13
 */
$(function() {
    var bodyHeight;

    //字符串加方法 
    String.prototype.visualLength = function() {
        var ruler = $("#ruler");
        ruler.text(this);
        return ruler[0].offsetWidth;
    }

    if(sessionStorage.name){
       sessionStorage.name = ""
    }  
    //开始测试 
    $(".start-btn").click(function() {
        $(".page2").hide();
        $(".bottom-img").hide();
        $(".page3").show();
        document.getElementById("video").pause();
    })

    //图片生成canvas 
    function convertImageToCanvas(imageSrc, text) {
        var canvas = document.getElementById("images_canvas");
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        img1.src = "img/result_bg.png";
        img2.src = imageSrc;
        img3.src = "img/border.png";
        canvas.width = img1.width;
        canvas.height = img1.height;
        canvas.getContext("2d").drawImage(img1, 0, 0);
        canvas.getContext("2d").drawImage(img2, 0, 0);
        canvas.getContext("2d").drawImage(img3, 0, 0);
        canvas.getContext("2d").drawImage(textcanvasFun(289, 60, text), 110, 678);
        return canvas;
    }

    // 文字生成canvas
    function textcanvasFun(x, y, text) {
        var c = document.createElement("canvas");
        var len = text.visualLength();
        var start;
        c.width = x;
        c.height = y;
        c.getContext("2d").font = "bold 48px Arial";
        c.getContext("2d").fillStyle = "#ffffff";
        if (len < x) {
            c.getContext("2d").textAlign = "center";
            start = x / 2;
        } else {
            c.getContext("2d").textAlign = "left";
            start = 0;
        }
        c.getContext("2d").fillText(text, start, 48);
        return c;
    }

    // canvas 生成 images
    function convertCanvasToImage(canvas) {
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        return image;
    }

    //模拟单选框 
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
        })
    }

    selectClassFun(".question1");
    selectClassFun(".question2");
    selectClassFun(".input");

    //同意条款 
    $(".agreen-btn").click(function() {
        if ($(".agreen-btn").hasClass("hasactive")) {
            $(".agreen-btn").removeClass("hasactive");
        } else {
            $(".agreen-btn").addClass("hasactive");
        }
    });


    $(".reg .close").click(function() {
        $(".reg").css("visibility","hidden");
        $(".result-box").show();
        // $(".opa-bg").hide();
    })


    $("#birthday").change(function() {
        var datearr = $("#birthday").val().split("-");
        var month = Number(datearr[1]);
        var day = Number(datearr[2]);
        xingzuo(month, day);
    })


    $('#result').click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var question1 = $("#question1").val();
        var question2 = $("#question2").val();
        var datearr = $("#birthday").val().split("-");
        var month = Number(datearr[1]);
        var day = Number(datearr[2]);
        var hasactive = $(".agreen-btn").hasClass("hasactive");
        var c1;
        var img;
        if (name == '') {
            alert("请填写您的名字！");
            return false;
        }

        if (datearr.length == 1) {
            alert("请填写出生日期");
            return false;
        }

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

        $(".console").show();

        setTimeout(function() {
            $(".console").hide();
            img = $("#twelve").attr("src");
            c1 = convertImageToCanvas(img, name);
            $(".result-img").attr("src", convertCanvasToImage(c1).src);
            $(".opa-bg").show();
            $(".page3").hide();
            $(".result-box").show();
        }, 1000)
    });

    function addImgsrc(name, num) {
        $("#twelve").attr("src", "img/twelve/" + name + num + ".png");
    }

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
            $(".opa-bg").hide();
        }else{
           $(".result-box").hide();
           $(".reg").css("visibility", 'visible');
        }
    })
     
    //返回结果页 
    $(".success .back").click(function() {
        $(".success").hide();
        $(".result-box").show();
        $(".opa-bg").show();
    })


    $(".share-btn").click(function() {
        // $(".result-box").hide();
        $(".share").show();
    })

    $(".news-pop .close").click(function(){
        $(".news-pop").css("visibility","hidden");
        $(".opa-bg").hide();
    })

    $(".tq").click(function() {
        // $("#scroller").html($(".protocol").html());
        $(".opa-bg").show();
        $(".news-pop").css("visibility","visible");
    });


    $(".share").click(function() {
        $(this).hide();
    })

    //复制文本 
    var clipboard = new Clipboard('.copy-btn');

    clipboard.on('success', function(e) {
        console.log(e);
        alert("复制成功！")
    });

    clipboard.on('error', function(e) {
        console.log(e);
        alert("复制失败!,请长按复制")
    });

    //页面滑动
    touch.on('.page1', 'swipeup', function(ev) {
        // $(".bottom-img").animate({ top: "90px" }, 1000);
        page1animte();
    });
    
    // 点击箭头下滑
    $(".arrow-down").click(function() {
        page1animte();
    })

    function page1animte() {
        $(".page2").animate({ top: "0px" }, 500);
        setTimeout(function() {
            $(".page1").hide();
        },500)
    }

    touch.on('.page2', 'swipedown', function(ev) {
        // $(".bottom-img").animate({ top: bodyHeight - 300 }, 1000);
        $(".page2").animate({ top: bodyHeight }, 500);
        $(".page1").show();
    });


    setTimeout(function() {
        bodyHeight = $(window).height();
        $(".page2").css({ top: bodyHeight });
    }, 1000);

});
