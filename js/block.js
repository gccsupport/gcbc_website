//鼠标移进去
function videoPlayback(img, imgPlayBtn, imgPlayLogo,video) {
	video.play();
	imgPlayBtn.style.display = "none";
	imgPlayLogo.style.display = "none";
	img.style.display = "none";
}

//鼠标离开
function videoStopped(video, imgPlayBtn, imgPlayLogo,img) {
	video.pause();
	imgPlayBtn.style.display = "inline";
	imgPlayLogo.style.display = "inline";
	img.style.display = "inline";
}
