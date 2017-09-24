function updatenav() {
	document.getElementById("navlist").innerHTML += "<li><a href='../data'>Data</a></li>";
}

$("document").ready(function() {
  updatenav();
});
