function updatenav() {
    var page = $(".active").html();
	console.log(page);
	document.getElementById("navlist").innerHTML += "<li><a href='../data'>Data</a></li>";
}

$("document").ready(function() {
  updatenav();
});
