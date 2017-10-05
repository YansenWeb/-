/**
 * Created by Jenson on 2017/7/13.
 */
define(['jquery'], function($) {
    var winW = $(window).width();
    var imgLeft = 0;
    $("#thumblist li").click(function() {
        $(this).addClass("tb-selected").siblings().removeClass("tb-selected");
        $(".jqzoom").attr('src', $(this).find("img").attr("mid"));
        $(".jqzoom").attr('rel', $(this).find("img").attr("big"));
    });

    $(".zoom-btn").click(function() {
        $(".posDiv").show();
        var img = new Image();
        img.src = $(".jqzoom").attr("rel");
        $(".posDiv img").attr("src", img.src);
        $(".posDiv img").load(function(){
            imgLeft = winW / 2 - img.width / 2;
            $(".posDiv img").css({"left":imgLeft,"top":20});
            imgload(imgLeft,20);
        });
        // img.load(function{
        // });
        // setTimeout(function() {
        // },100);
    });

    $(".posDiv .close").click(function() {
        $(".posDiv").hide();
    });



    // function imgload(imgLeft) {
    //     var drag = 1;
    //     var move = 0;
    //     var X1 = imgLeft,
    //         Y1 = 0;
    //        console.log(imgLeft);
    //     $(".posDiv img").mouseover(function(e) {
    //         drag = 1;
    //         move = 0;
    //         console.log(1);
    //     });

    //     $(".posDiv img").mouseout(function(e) {
    //         drag = 0;
    //         move = 0;
    //         console.log(2);
    //     });

    //     $(".posDiv img").mouseup(function(e) {
    //         move = 0;
    //         X1 = e.pageX - X1;
    //         Y1 = e.pageY - Y1;
    //     });

    //     $(".posDiv img").mousemove(function(e) {
    //         e.preventDefault();
    //         if (move && drag) {
    //             $(".posDiv img").css("left", e.pageX - X1);
    //             $(".posDiv img").css("top", e.pageY - Y1);
    //         }
    //     })

    //     $(".posDiv img").mousedown(function(e) {
    //         e.preventDefault();
    //         if (drag) {
    //             X1 = e.pageX - X1;
    //             Y1 = e.pageY - Y1;
    //             move = 1;
    //         }
    //     })
    // }

    function imgload(imgLeft,imgRight){
            // 参数列表
        var params = {
            left:imgLeft || 0 ,
            top:imgRight || 0,
            currentX: 0,
            currentY: 0,
            flag: false
        };
        //获取相关CSS属性
        var getCss = function(o, key) {
            // getComputedStyle是为了兼容FF浏览器
            return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
        };

        //拖拽的实现
        var startDrag = function(target, callback) {
            // 首先获取目标元素的left、top属性值
            if (getCss(target, "left") !== "auto") {
                params.left = getCss(target, "left");
            }
            if (getCss(target, "top") !== "auto") {
                params.top = getCss(target, "top");
            }

            target.onmousedown = function(event) {
                // 当鼠标按下时表示元素可以移动，将标记设为true;
                params.flag = true;

                /*为了阻止拖动浏览器中元素时发生默认事件，
                例如拖动图片时会出现一个新窗口显示该图片，下面代码可以阻止这种事件发生
                */
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    event.returnValue = false;
                }

                var e = event;
                params.currentX = e.clientX;
                params.currentY = e.clientY;
            };
            target.onmouseup = function() {
                // 当鼠标松开时将标记设为false，表示不可移动
                params.flag = false;
                // 当鼠标松开时再次更新元素的位置
                if (getCss(target, "left") !== "auto") {
                    params.left = getCss(target, "left");
                }
                if (getCss(target, "top") !== "auto") {
                    params.top = getCss(target, "top");
                }
            };
            target.onmousemove = function(event) {
                var e = event ? event : window.event;
                /*当params.flag==true时才可以移动，表明此时鼠标时按下状态
                 */
                if (params.flag) {
                    // 获取到当前鼠标的位置
                    var nowX = e.clientX,
                        nowY = e.clientY;
                    // 获取当前鼠标移动的距离，即当前鼠标位置减去初始位置
                    var disX = nowX - params.currentX,
                        disY = nowY - params.currentY;
                    // 将元素的位置更新，parsenInt为了将属性值变为数字类型
                    target.style.left = parseInt(params.left) + disX + "px";
                    target.style.top = parseInt(params.top) + disY + "px";
                }
            }
        };

        var content = document.getElementById("img");
        startDrag(content);
    }


});
