function updatenav() {
	var page;
	if(document.getElementsByClassName("active")[0].getElementsByTagName("a")[0].innerHTML == undefined) {
	   page = "data";
	}
    page = document.getElementsByClassName("active")[0].getElementsByTagName("a")[0].innerHTML;
	
	if(page == "Home") {
		document.getElementById("navlist").innerHTML += "<li><a href='./data'>Data</a></li>";
	} else {
		document.getElementById("navlist").innerHTML += "<li><a href='../data'>Data</a></li>";
	}
}

$("document").ready(function() {
  updatenav();
});
