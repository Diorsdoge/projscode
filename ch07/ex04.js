//7.4 私有变量
function add(num1, num2) {
	var sum = num1 + num2;
	return sum;
}

function MyObeject(){
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	//特权方法
	this.publicMethod = function(){
		privateVariable++;
		return privateFunction();
	};
}

function Person(name){
	this.getName = function(){
		return name;
	};
	this.setName = function(value){
		name = value;
	};
}
var person = new Person("Nicholas");
alert(person.getName());	//"Nicholas"
person.setName("Greg");
alert(person.getName());		//"Greg"

//7.4.1 静态私有变量
(function(){
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	//构造函数
	MyObeject = function(){
	};
	//公有／特权方法
	MyObeject.prototype.publicMethod = function(){
		privateVariable++;
		return privateFunction();
	};
})();

(function(){
	var name = " ";
	Person = function(value){
		name =  value;
	};
	Person.prototype.getName = function(){
		return name;
	};
	Person.prototype.setName = function(value){
		name = value;
	};
})();

var person1 = new Person("Nicholas");
alert(person1.getName());	//"Nicholas"
person1.setName("Greg");
alert(person1.getName());		//"Greg"

var person2 = new Person("Michael");
alert(person1.getName());		//"Michael"
alert(person2.getName());		//"Michael"

//7.4.2 模块模式
//javascript是以对象字面量的方式来创建单例对象的。
var singleton = {
	name : value,
	method : function() {
		//这里是方法的代码
	}
};

//增强
var singleton = function(){
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	//特权／公有方法和属性
	return {
		publicProperty: true,
		publicMethod : function(){
			privateVariable++;
			return privateFunction();
		}
	};
}();

var application = function() {
	//私有变量和函数
	var components = new Array();
	//初始化
	components.push(new BaseComponent());
	//公共
	return {
		getComponentCount : function(){
			return components.length;
		}
	}
}



























































