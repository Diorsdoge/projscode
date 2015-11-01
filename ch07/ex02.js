//7.2 闭包
//常见de闭包方式就是在一个函数内创建另一个函数
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

function compare(value1, value2) {
	if (value1 < value2){
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}
var result = compare(5, 10);

var compare = createComparisonFunction("name");
var result = compare({ name: "Nicholas" }, { name: "Greg" });

//创建函数
var compareNames = createComparisonFunction("name");
//调用函数
var result = compareNames({ name: "Nicholas", { name: "Greg" });
//解除对匿名函数的引用(以便释放内存)
compareNames = null;

//7.2.1 闭包与变量
function createFunctions(){
	var result = new Array();
	for (var i=0; i < 10; i++){
		result[i] = function(){
			return i;
		};
	}
	return result;
}

function createFunction(){
	var result = new Array();
	for (var i=0; i < 10; i++){
		result[i] = function(num){
			return function(){
				return num;
			};
		}(i);
	}
	return result;
}

//7.2.2 关于this对象
var name = "The Window";
var object = {
	name : "My object",
	getNameFunc : function(){
		return function(){
			return this.name;
		};
	}
};
alert(object.getNameFunc()());		//"the window"（在非严格格式下）

var name = "The Window";
var object = {
	name : "My Object",
	getNameFunc : function(){
		var that = this;
		return function(){
			return that.name;
		};
	}
};
alert(object.getNameFunc()());	//"My Object"

var name = "The Window";
var object = {
	name : "My Object",
	getName: function(){
		return this.name;
	}
};

object.getName();		//"My Object"
(object.getName)();		//"My Object"
(object.getName = object.getName)();	//"The Window" 在非严格格式下

//7.2.3 内存泄漏
function assignHandler(){
	var element = document.getElementById("someElement");
	element.onclick = function(){
		alert(element.id);
	};
}

function assignHandler(){
	var element = document.getElementById("someElement");
	var id = element.id;
	element.onclick = function(){
		alert(id);
	};
	element = null;
}