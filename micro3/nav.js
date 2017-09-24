function updatenav() {
    var page = docuent.getElementByClass("active").innerHTML();
	console.log(page);
	document.getElementById("navlist").innerHTML += "<li><a href='../data'>Data</a></li>";
}

$("document").ready(function() {
  updatenav();
});
