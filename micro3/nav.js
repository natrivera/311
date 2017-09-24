function updatenav() {
    var page = document.getElementsByClassName("active")[0].getElementsByTagName("a")[0];
	console.log(page);
	
	document.getElementById("navlist").innerHTML += "<li><a href='../data'>Data</a></li>";
}

$("document").ready(function() {
  updatenav();
});
