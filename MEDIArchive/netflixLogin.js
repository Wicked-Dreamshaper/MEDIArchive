//loginpage.js

var letters = "Monkeybustt_25".split('');
var index = parseInt(0);
var currentString = "";

function login()
{
	window.location.href = "mainPage2.html";
}

function monkeybustt()
{
	if(index < 14)
	{
		currentString += letters[index];
		index += 1;
	}
	document.getElementById('output').value = currentString;
}
