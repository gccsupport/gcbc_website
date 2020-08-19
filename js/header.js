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


