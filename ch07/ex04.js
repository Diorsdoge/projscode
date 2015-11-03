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
		},
		registerComponent : function(component){
			if (typeof component == "object"){
				components.push(component);
			}
		}
	};
}();

//7.4.3 增强的模块模式
var singleton = function(){
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	//创建对象
	var object = new CustomType();
	//添加特权/公有属性和方法
	object.publicProperty = true;
	object.publicMethod = function(){
		privateVariable++;
		return privateFunction();
	};
	//返回这个对象
	return object;
}();

var application = function(){
	//私有变量和函数
	var components = new Array();
	//初始化
	components.push(new BaseComponent());
	//创建application的一个局部副本
	var app = new BaseComponent();
	//公共接口
	app.getComponentCount = function(component){
		if (typeof component == "object"){
			components.push(component);
		}
	};
	//返回这个副本
	return app;
}();