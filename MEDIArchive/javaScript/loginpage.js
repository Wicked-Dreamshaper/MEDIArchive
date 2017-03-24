//loginpage.js
var letters = "Monkeybustt_25".split('');
var index = parseInt(0);
var currentString = "";

function login()
{
	window.location.href = "mainPage.html";
}

function monkeybustt(event)
{
	currentString = document.getElementById('output').value;
	currentString = currentString.substring(0, currentString.length);
	if(index<14)
	{
		currentString += letters[index];
		index++;
	}
	document.getElementById('output').value = currentString;
}

function removelast()
{
	currentString = document.getElementById('output').value;
	currentString = currentString.substring(0, currentString.length-1);
	document.getElementById('output').value = currentString;
}
