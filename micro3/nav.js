function updatenav() {
	var page;
	if(document.getElementById('navlist').classList.contains("active")) {
	   page = document.getElementsByClassName("active")[0].getElementsByTagName("a")[0].innerHTML;
	} else {
	   page = "data";
	}
    
	
	if(page == "Home") {
		document.getElementById("navlist").innerHTML += "<li><a href='https://natrivera.github.io/311/micro3/data'>Data</a></li>";
	} else {
		document.getElementById("navlist").innerHTML += "<li><a href='../data'>Data</a></li>";
	}
	console.log(page);
}

$("document").ready(function() {
  updatenav();
});
