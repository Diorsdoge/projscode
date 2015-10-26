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

function createComparisonFunction(propertyName) {

	return function(object1, object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if (value1 < value2){
			return -1;
		} else if (value1 > value2){
			return 1;
		} else {
			return 0
		}
	};
}

var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];

data.sort(createComparisonFunction("name"));
alert(data[0].name);   //Nicholas
data.sort(createComparisonFunction("age"));
alert(data[0].name);   //Zachary

//5.5.4 函数的内部属性
function factorial(num){
	if (num <= 1){
		return 1;
	} else {
		return num * factorial(num-1);
	}
}
//为了消除factorial()与函数名紧密耦合的现象，可以使用arguments.callee.
function factorial(num){
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}

var trueFactorial = factorial;
factorial = function(){
	return 0;
};
alert(trueFactorial(5));     //120
alert(factorial(5));     //0

window.color ＝ "red";
var o = { color: "blue" };
function sayColor(){
	alert(this.color);
}
sayColor();   //"red"
o.sayColor = sayColor;
o.sayColor();    //"blue"

//以下代码会导致警告框中显示outer()函数源代码
function outer(){
	inner();
}
function inner(){
	alert(inner.caller);
}
outer();

//为了实现更松散的耦合,也可以使用arguments.callee.caller来访问相同的信息。
function outer(){
	inner();
}
function inner(){
	alert(arguments.callee.caller);
}
outer();

//5.5.5 函数属性和方法

function sayName(name){
	alert(name);
}
function sum(num1, num2){
	return num1 + num2;
}
function sayHi(){
	alert("hi");
}
alert(sayName.length);    //1
alert(sum.length);        //2
alert(sayHi.length);      //0

function sum(num1, num2){
	return num1 + num2;
}
function callSum1(num1, num2){
	return sum.apply(this, arguments);		//传入arguments对象
}
function callSum2(num1, num2){
	return sum.apply(this, [num1, num2]);
}
alert(callSum1(10,10));		//20
alert(callSum2(10,10));		//20

function sum(num1, num2){
	return num1 + num2;
function callSum(num1, num2){
	return sum.call(this, num1, num2);
}
alert(callSUm(10,10));    //20

//下面两个例子看call()和apply()真正的用武之地
window.color = "red";
var o = { color: "blue" };
function sayColor(){
	alert(this.color);
}
sayColor();				//red
sayColor.call(this);	//red
sayColor.call(window);	//red
sayColor.call(o);		//blue

window.color = "red";
var o = { color: "blue" };
function sayColor(){
	alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();		//blue
