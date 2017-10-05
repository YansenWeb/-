/**
 * Created by Jason on 2017/9/24
 */
$(function() {
    function getQueryStringArgs() {
        var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);

            if (name.length) {
                args[name] = value;
            }
        }

        return args;
    }

    var args = getQueryStringArgs();
    var c1;
    var img;

    console.log(args["constellation"]); //星座
    console.log(args["text"]); //文字描述
    $("#twelve").attr("src", "img/twelve/" + args["constellation"] + ".png");


    //字符串加方法 
    String.prototype.visualLength = function() {
        var ruler = $("#ruler");
        ruler.text(this);
        return ruler[0].offsetWidth;
    }



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
        canvas.getContext("2d").drawImage(textcanvasFun(289, 60, text), 194, 678);
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

    setTimeout(function() {
        img = $("#twelve").attr("src");
        c1 = convertImageToCanvas(img,args["text"]);
        $(".result-box").show();
        $(".result-img").attr("src", convertCanvasToImage(c1).src);
        $(".opa-bg").show();
        $(".result-box").show();
    },300);

    $(".share-btn").click(function() {
        $(".share").show();
    })

    $(".share").click(function() {
        $(this).hide();
    })
});
