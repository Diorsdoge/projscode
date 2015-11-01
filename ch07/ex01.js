//第7章 函数表达式

function functionName(arg0, arg1, arg2) {
	//函数体
}

alert(functionName.name);		//"functionName"

sayHi();
function sayHi(){
	alert("Hi");
}

var functionName = function(arg0, arg1, arg2){
	//函数体
};

sayHi();		//错误：函数还不存在
var sayHi = function(){
	alert("Hi");
};

//不要这样做！
if(condition){
	function sayHi(){
		alert("Hi");
	}
} else {
	function sayHi(){
		alert("Yo!");
	}
}

//可以这样做
var sayHi;
if(condition){
	sayHi = function(){
		alert("Hi");
	};
} else {
	sayHi = function(){
		alert("Yo");
	};
}

function createComparisonFunction(propertyName) {
	return function(object1, object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (value1 < value2){
			return -1;
		} else if (value1 > value2){
			return 1;
		} else {
			return 0;
		}
	};
}

//7.1 递归

function factorial(num){
	if (num <= 1){
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial);		//出错

//使用arguments.callee解决这个问题
function factorial(num){
	if(num <= 1){
		return 1;
	} else {
		return num * arguments.callee(num-1);
	}
}

//可以使用命名函数表达式来达到相同的结果
var factorial = (function f(num){
	if (num <= 1){
		return 1;
	} else {
		return num * f(num-1);
	}
});