//鼠标移进去
function videoPlayback(video, imgPlayBtn, imgPlayLogo) {
	// //给视频标签添加缓存播放---video标签属性。
	// video.setAttribute("autoplay", "autoplay")
	// //给视频标签添加循环播放---video标签属性。
	// video.setAttribute("loop", "loop")
	//播放视频
	video.play();
	imgPlayBtn.style.display = "none";
	imgPlayLogo.style.display = "none";
}

//鼠标离开
function videoStopped(video, imgPlayBtn, imgPlayLogo) {
	//停止播放
	video.pause();
	imgPlayBtn.style.display = "inline";
	imgPlayLogo.style.display = "inline";
}
