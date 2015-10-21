//4.2 执行的环境及作用域
var color = "blue";
function changeColor() {
	if (color === "blue") {
		color = "red";
	} else {
		color = "blue";
	}
}
changeColor();
alert("Color is now " + color);


var color = "blue";
function changeColor() {
	var anotherColor = "red";

	function swapColors() {
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
		//这里可以访问color、anotherColor、tempColor
	}
	//这里可以访问color和anotherColor
	swapColors();
}
//这里只能访问color
changeColor();

//4.2.1 延长作用域的链
function buildUrl() {
	var qs = "?debug=true";
	with(location) {
		var url = href + qs;
	}
	return url;
}

if (true) {
	var color = "blue";
}
alert(color);     //blue   在javascript中会添加到执行环境

for (var i = 0;i < 10; i++) {
	//doSomething(i);
}
alert(i);   //10

//1 声明变量
function add(num1, num2) {
	var sum = num1 + num2;
	return sum;
}
var result = add(10, 20);   //30
alert(sum);       //由于sum不是有效的变量，因此会导致错误

function add(num1, num2) {
	sum = num1 + num2;
	return sum;
}
var result = add(10, 20);   //30
alert(sum);       //30

//2 查询标识符
var color = "blue";
function getColor() {
	return color;
}
alert(getColor());  //"blue"

var color = "blue";
function getColor() {
	var color = "red"
	return color;
}
alert(getColor());    //"red"