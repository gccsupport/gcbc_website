function hoverTitleOption() {
	var length = arguments.length;
	for (var i = 0; i < length; i++) {
		if (i + 1 == length) {
			arguments[i].style.top = "0px";
		} else {
			arguments[i].style.display = "block";
		}
	}
}

function hoverNotTitleOption() {
	var length = arguments.length;
	for (var i = 0; i < length; i++) {
		if (i + 1 == length) {
			arguments[i].style.top = "-4px";
		} else {
			arguments[i].style.display = "none";
		}
	}
}

function languageHover(root) {
	console.log("hover")
	root.style.height = "150px";
}

function languageHoverOut(root) {
	console.log("hoverOut")
	root.style.height = "90px";
}

// 鼠标移进去
function videoPlayback(img, imgPlayBtn, imgPlayLogo, video) {
	console.log("hover了")
	video.play();
	imgPlayBtn.style.display = "none";
	imgPlayLogo.style.display = "none";
	img.style.display = "none";
}

//鼠标离开
function videoStopped(video, imgPlayBtn, imgPlayLogo, img) {
	console.log("hover移出去了")
	video.pause();
	imgPlayBtn.style.display = "inline";
	imgPlayLogo.style.display = "inline";
	img.style.display = "inline";
}


function setScrollBackgroundColorChange(label) {
	var scrollFunc = function(e) {
		e = e || window.event;
		if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件 
			if (document.documentElement.scrollTop >= 500) {
				label.style.background = "rgba(0, 0, 0, 1)";
			} else {
				label.style.background = "rgba(0, 0, 0, 0.26)";
			}
		} else if (e.detail) { //Firefox滑轮事件 
			if (document.documentElement.scrollTop >= 500) {
				label.style.background = "rgba(0, 0, 0, 1)";
			} else {
				label.style.background = "rgba(0, 0, 0, 0.26)";
			}
		}
	}
	//给页面绑定滑轮滚动事件 
	if (document.addEventListener) { //firefox 
		document.addEventListener('DOMMouseScroll', scrollFunc, true);
	}
	//滚动滑轮触发scrollFunc方法 //ie 谷歌 
	window.onmousewheel = document.onmousewheel = scrollFunc;
}
