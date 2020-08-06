//first-button
function btnOne() {
	document.getElementById('third-tag').style.background = "yellow";
	
}

//second-button
function btnTwo() {
	document.getElementById('append').append(' Hello World');

}

//third-button
function btnThree() {
	var z = document.getElementById("pTag");
	if(z.style.display == "none")
		z.style.display = "block";
	else
		z.style.display = "none";
}