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
