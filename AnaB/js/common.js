$(function(){
	var viewport = document.querySelector("meta[name=viewport]");
	var winWidths=$(window).width();
	var densityDpi=640/winWidths;
		densityDpi= densityDpi>1?300*640*densityDpi/640:densityDpi;
	if(isWeixin()){
		viewport.setAttribute('content', 'width=640,user-scalable=no, target-densityDpi='+densityDpi);
	}else{
		viewport.setAttribute('content', 'width=640, user-scalable=no');
		window.setTimeout(function(){
			viewport.setAttribute('content', 'width=640, user-scalable=no');
		},1000);
	}
	function isWeixin(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger") {
			return true;
		} else {
			return false;
		}
	}

	document.body.addEventListener('touchstart', function () { });
	
	// $(".rule-btn").click(function(){
	//  $(".rule").fadeIn(200);
	// })
	
	// $(".rule-back").click(function(){
	//  $(".rule").fadeOut(200);	
	// })
	
	// $(".from-ture").click(function(){
	//   $(".result-box").fadeIn(200);	
	// })
	
	
	// $(".share-btn").click(function(){
	//   $(".share").fadeIn(200);
	//   $(".result-box").fadeOut(200);	
	// })

	//屏蔽ios下上下弹性
	$(window).on('scroll.elasticity', function (e) {
	    e.preventDefault();
	}).on('touchmove.elasticity', function (e) {
	    e.preventDefault();
	});	
	
	// $("#wrap").show();
})
