//width and height
var txt = "";
txt += "<p>Width: " + window.innerWidth + "</p>";
txt += "<p>Height: " + window.innerHeight + "</p>";

document.getElementById("wh").innerHTML = txt;

//location on local disk
var txt2 ="";
txt2 += "<p>Current location: " + window.location;

document.getElementById("location").innerHTML = txt2;

function refreshPage(){
	window.location.reload();
}
