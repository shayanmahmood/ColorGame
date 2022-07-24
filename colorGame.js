var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector(".easy");
var hardButton = document.querySelector(".hard");
var copy = document.querySelector(".copyright");

resetButton.addEventListener("click", function () {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colours";
});
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changedColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Try Again";
			copy.style.color = clickedColor;

		}
		else {
			this.style.background = "#2323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

hardButton.addEventListener("click", function () {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
squares[i].style.background = colors[i];
squares[i].style.display = "block";}
});

easyButton.addEventListener("click", function () {
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colours";
	for (var i = 0; i < squares.length; i++) {
		
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

function changedColor(color) {
	for (var i = 0; i < squares.length; i++) {

		squares[i].style.background = color;

	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
































