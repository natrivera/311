function updatenav() {
	console.log("a");
	document.getElementById("navlist").innerHTML += "<li><a href='/data'>Data</a></li>";
	console.log("b");

}

window.onLoad = updatenav;
