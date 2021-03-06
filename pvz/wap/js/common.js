$(function(){
	var viewport = document.querySelector("meta[name=viewport]");
	var winWidths=$(window).width();
	var densityDpi=750/winWidths;
		densityDpi= densityDpi>1?300*750*densityDpi/750:densityDpi;
	if(isWeixin()){
		viewport.setAttribute('content', 'width=750,user-scalable=no, target-densityDpi='+densityDpi);
	}else{
		viewport.setAttribute('content', 'width=750, user-scalable=no');
		window.setTimeout(function(){
			viewport.setAttribute('content', 'width=750, user-scalable=no');
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

	//屏蔽ios下上下弹性
	$(window).on('scroll.elasticity', function (e) {
	    e.preventDefault();
	}).on('touchmove.elasticity', function (e) {
	    e.preventDefault();
	});	

})