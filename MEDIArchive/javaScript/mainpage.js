//mainpage.js


//on mouseover events for media
function loadImageOne()
{
	document.getElementById("image2").style.display = "none";
	document.getElementById("image1").style.display = "block";
}

function loadImageTwo()
{
	document.getElementById("image1").style.display = "none";
	document.getElementById("image2").style.display = "block";
}

//Clicking on Search
function loadSearch()
{
	window.location.href = "searchpage.html";
}

//Clicking on Sort
function loadSort()
{
	window.location.href = "sortpage.html";
}

//Clicking on netflix logo
function netflixWindow()
{
	window.open("netflixlogin.html");
}

//Adding media
function loadAddMedia()
{
	window.location.href = "addmediapage.html";
}