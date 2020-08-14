function showView() {
	var length = arguments.length;
	for (var i = 0; i < length; i++) {
		arguments[i].style.display = "block";
	}
}

function hideView() {
	var length = arguments.length;
	for (var i = 0; i < length; i++) {
		arguments[i].style.display = "none";
	}
}
