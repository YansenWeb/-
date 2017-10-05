var bgmusic;
// 背景音乐开关
function audio(){
	if ($("#audioico").attr("class") == "on") {
		$("#audioico").attr({
			"class": "off",
		});
		bgmusic.pause();
	} else {
		$("#audioico").attr({
			"class": "on",
		});
		bgmusic.play();
	}
}