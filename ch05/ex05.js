//5.5 Function类型
function sum(num1, num2) {
	return num1 + num2;
}

var sum = function(num1, num2){
	return num1 + num2;
};

var sum = new Function("num1", "num2", "return num1 + num2");  //不推荐

function sum(num1, num2) {
	return num1 + num2;
}
alert(sum(10,10));   //20

var anotherSum = sum;
alert(anotherSum(10,10));	//20

sum = null;
alert(anotherSum(10,10));	//20

//5.5.1 没有重载(深入理解)
function addSomeNumber(num){
	return num + 100;
}
function addSomeNumber(num) {
	return num + 200;
}
var result = addSomeNumber(100);    //300

var addSomeNumber = function(num) {
	return num + 100;
};
addSomeNumber = function(num) {
	return num + 200;
}
var result = addSomeNumber(100);  //300

//5.5.2 函数声明与函数表达式
alert(sum(10,10));
function sum(num1, num2){
	return num1 + num2;
}

alert(sum(10,10));
var sum = function(num1, num2){   //导致错误
	return num1 + num2;
};

//5.5.3 作为值得函数
function callSomeFunction(someFunction, someArgument){
	return someFunction(someArgument);
}

function add10(num){
	return num + 10;
}
var result1 = callSomeFunction(add10, 10);
alert(result1);			//20
function getGreeting(name){
	return "Hello, " + name;
}
var result2 = callSomeFunction(getGreeting,"Nicholas");
alert(result2);        //"Hello,Nicholas"