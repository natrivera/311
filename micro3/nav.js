function updatenav() {
	var page;
	if($(".active").length) {
	   page = document.getElementsByClassName("active")[0].getElementsByTagName("a")[0].innerHTML;
	} else {
	   page = "data";
	}
    
	
	if(page == "Home") {
		document.getElementById("navlist").innerHTML += "<li><a href='./data'>Data</a></li>";
	} else if (page == "data") {
		document.getElementById("navlist").innerHTML += "<li id='new'><a href='../data'>Data</a></li>";
		$("#new").addClass("active");
	} else {
	        document.getElementById("navlist").innerHTML += "<li><a href='../data'>Data</a></li>";
	}
	console.log(page);
}

$("document").ready(function() {
  updatenav();
});
