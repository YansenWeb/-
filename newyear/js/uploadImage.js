
function selectFileImage(fileObj) {
    var file = fileObj.files['0'];  
    //图片方向角 added by lzk  
    var Orientation = null;  
      
    if (file) {  
        console.log("正在上传,请稍后...");  
        var rFilter = /^(image\/jpeg|image\/png)$/i; // 检查图片格式  
        if (!rFilter.test(file.type)) {  
            //showMyTips("请选择jpeg、png格式的图片", false);  
            return;  
        }  
        // var URL = URL || webkitURL;  
        //获取照片方向角属性，用户旋转控制  
        EXIF.getData(file, function() {  
           // alert(EXIF.pretty(this));  
            EXIF.getAllTags(this);   
            //alert(EXIF.getTag(this, 'Orientation'));   
            Orientation = EXIF.getTag(this, 'Orientation');  
            //return;  
        });  
          
        var oReader = new FileReader();  
        oReader.onload = function(e) {  
            //var blob = URL.createObjectURL(file);  
            //_compress(blob, file, basePath);  
            var image = new Image();  
            image.src = e.target.result;  
            image.onload = function() {  
                var expectWidth = this.naturalWidth;  
                var expectHeight = this.naturalHeight;  
                  
                if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {  
                    expectWidth = 800;  
                    expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;  
                } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {  
                    expectHeight = 1200;  
                    expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;  
                }  
                var canvas = document.createElement("canvas");  
                var ctx = canvas.getContext("2d");  
                canvas.width = expectWidth;  
                canvas.height = expectHeight;  
                ctx.drawImage(this, 0, 0, expectWidth, expectHeight);  
                var base64 = null;  
                //修复ios  
                if (navigator.userAgent.match(/iphone/i)) {  
                    console.log('iphone');  
                    //alert(expectWidth + ',' + expectHeight);  
                    //如果方向角不为1，都需要进行旋转 added by lzk  
                    if(Orientation != "" && Orientation != 1){  
//                      alert('旋转处理');  
                        Ori=Orientation;
//                      rotateCW(0);
//                      switch(Orientation){  
//                          case 6://需要顺时针（向左）90度旋转  
//                              alert('需要顺时针（向左）90度旋转');
////                              rotateCW(0);
//                              //rotateImg(this,'left',canvas);  
//                              break;  
//                          case 8://需要逆时针（向右）90度旋转  
//                              alert('需要顺时针（向右）90度旋转');  
////                              rotateCCW(0);
//                              //rotateImg(this,'right',canvas);  
//                              break;  
//                          case 3://需要180度旋转  
//                              alert('需要180度旋转');   
////                              rotateCCW(0); 
//                              //rotateImg(this,'right',canvas);//转两次  
//                              //rotateImg(this,'right',canvas);  
//                              break;  
//                      }           
                    }  
                      
                    /*var mpImg = new MegaPixImage(image); 
                    mpImg.render(canvas, { 
                        maxWidth: 800, 
                        maxHeight: 1200, 
                        quality: 0.8, 
                        orientation: 8 
                    });*/  
                    base64 = canvas.toDataURL("image/jpeg", 0.8);  
                }else if (navigator.userAgent.match(/Android/i)) {// 修复android  
                    var encoder = new JPEGEncoder();  
                    base64 = encoder.encode(ctx.getImageData(0, 0, expectWidth, expectHeight), 80);  
                }else{  
                    //alert(Orientation);  
                    if(Orientation != "" && Orientation != 1){  
                        //alert('旋转处理');  
                        switch(Orientation){  
                            case 6://需要顺时针（向左）90度旋转  
                                alert('需要顺时针（向左）90度旋转');
//                              rotateCW(0);
                                //rotateImg(this,'left',canvas);  
                                break;  
                            case 8://需要逆时针（向右）90度旋转  
                                alert('需要顺时针（向右）90度旋转');  
//                              rotateCCW(0);
                                //rotateImg(this,'right',canvas);  
                                break;  
                            case 3://需要180度旋转  
                                alert('需要180度旋转');   
//                              rotateCCW(0); 
                                //rotateImg(this,'right',canvas);//转两次  
                                //rotateImg(this,'right',canvas);  
                                break;  
                        }         
                    }  
                      
                    base64 = canvas.toDataURL("image/jpeg");  
                }  
                //uploadImage(base64);  
                $(".createimg").attr("src", base64);
            };  
        };  
        oReader.readAsDataURL(file);  
    }  
}  
