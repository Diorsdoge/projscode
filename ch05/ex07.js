//5.7 单体内置对象
//5.7.1 Global对象
//1. URI编码方法

var uri = "http://www.wrox.com/illegal value.htm#start";

//"http://www.wrox.com/illegal%20value.htm#start"
alert(encodeURI(uri));

//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
alert(encodeURIComponent(uri));

//2. eval()方法
eval("alert('hi')");
alert("hi");		//与上一句相等

var msg = "hello world";
eval("alert(msg)");		//"hello world"

eval("function sayHi(){ alert('hi');}");
sayHi();

eval("var msg = 'hello world'; ");
alert(msg);

"use strict";
eval = "hi";	//causes error

//3. Global 对象的属性
//4. window 对象
var color = "red";
function sayColor(){
	alert(window.color);
}
window.sayColor();	//"red"

//另一种取得Global对象的方法是
var global = function(){
	return this;
}();		

//5.7.2 Math对象
//1.Math对象的属性
//2.min()和max()方法
var max = Math.max(3, 54, 32, 16);
alert(max);		//54
var min = Math.min(3, 54, 32, 16);
alert(min);		//3

//要找到数组中最大或者最小值，可以使用apply（）方法
var values = [1, 2, 3, 4, 5, 6, 7, 8, ];
var max = Math.max.apply(Math, values);

//3.舍入方法
alert(Math.ceil(25.9));		//26
alert(Math.ceil(25.5));		//26
alert(Math.ceil(25.1));		//26

alert(Math.round(25.9));	//26
alert(Math.round(25.5));	//26
alert(Math.round(25.1));	//25

alert(Math.floor(25.9));	//25
alert(Math.floor(25.5));	//25
alert(Math.floor(25.1));	//25

//4.random()方法
//Math.random()产生介于0~1之间的一个随机数,不包括0，1
var num = Math.floor(Math.random() * 10 + 1); 
var num = Math.floor(Math.random() * 9 + 2);

function selectFrom(lowerValue, upperValue) {
	var choices = upperValue - lowerValue + 1;
	return Math.floor(Math.random() * choices + lowerValue);
}
var num = selectFrom(2, 10);
alert(num);		//介于2和10之间（包括2和10）的一个数值

var colors = ["red", "green", "blue", "yellow", "blcak", "purple", "brown"];
var color = colors[selectFrom(0, colors.length - 1)];
alert(color);		//可能是数组中包含的任何一个字符串

//5. 其它方法