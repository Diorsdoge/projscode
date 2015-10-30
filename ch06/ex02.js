//6.2 创建对象

//6.2.1 工厂模式
function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name);
	};
	return o;
}
var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");

//6.2.2 构造函数模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	};
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

alert(person1.constructor == Person);	//true
alert(person2.constructor == Person);	//true

alert(person1 instanceof Object);		//true
alert(person1 instanceof Person);		//true
alert(person2 instanceof Object);		//true
alert(person2 instanceof Person);		//true

//1.将构造函数当作函数
//当作构造函数使用
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();		//"Nicholas"
//作为普通函数调用
Person("Greg", 27, "Doctor");		//添加到window
window.sayName();		//"Greg"
//在另一个对象的作用域中调用
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();			//"Kristen"

//2.构造函数的问题
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = new Function("alert(this.name)"); //与声明函数逻辑上是等价的
}

alert(person1.sayName == person2.sayName);		//false

function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName(){
	alert(this.name);
}
var person1 = new Person("Nicholas", 29, "Software");
var person2 = new Person("Greg", 27, "Doctor");

//6.2.3 原型模式
function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
};
var person1 = new Person();
person1.sayName();		//"Nicholas"
var person2 = new Person();
person2.sayName();		//"Nicholas"
alert(person1.sayName == person2.sayName);		//true

//1.理解原型对象
alert(Person.prototype.isPrototypeOf(person1));		//true
alert(Person.prototype.isPrototypeOf(person2));		//true

alert(Object.getPrototypeOf(person1) == person.prototype);	//true
alert(Object.getPrototypeOf(person1).name);			//"Nicholas"

function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
person1.name = "Greg";
alert(person1.name);		//"Greg"--来自实例
alert(person2.name);		//"Nicholas"--来自原型

function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
person1.name = "Greg";
alert(person1.name);		//"Greg"--来自实例
alert(person2.name);		//"Nicholas"--来自原型
delete person1.name;
alert(person1.name);		//"Nicholas"--来自原型

function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
alert(person1.hasOwnProperty("name"));		//false
person1.name = "Greg";
alert(person1.name);		//"Greg"--来自实例
alert(person1.hasOwnProperty("name"));		//true
alert(person2.name);		//"Nicholas"--来自原型
alert(person2.hasOwnProperty("name"));		//false
delete person1.name;
alert(person1.name);		//"Nicholas"--来自原型
alert(person1.hasOwnProperty("name"));		//false

//2.原型与in操作符
function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
alert(person1.hasOwnProperty("name"));		//false
alert("name" in person1);		//true
person1.name = "Greg";
alert(person1.name);		//"Greg"--来自实例
alert(person1.hasOwnProperty("name"));		//true
alert("name" in person1);		//true
alert(person2.name);		//"Nicholas"--来自原型
alert(person2.hasOwnProperty("name"));		//false
alert("name" in person2);		//true
delete person1.name;
alert(person1.name);		//"Nicholas"--来自原型
alert(person1.hasOwnProperty("name"));		//false
alert("name" in person1)		//true

function hasPrototypeProperty(object, name){
	return !object.hasOwnProperty(name) && (name in object);
}

function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
};
var person = new Person();
alert(hasPrototypeProperty(person,name));		//true
person.name = "Greg";
alert(hasPrototypeProperty(person, "name"));	//false

var o = {
	toString : function(){
		return "My Object";
	}
};
for(var prop in o){
	if(prop == "toString"){
		alert("Found toString");	//在IE中不会显示
	}
}

function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
};
var keys = Object.keys(Person.prototype);
alert(keys);		//"name,age,job,sayName"
var p1 = new Person();
p1.name = "Rob";
p1.age = 31;
var p1keys = Object.keys(p1);
alert(p1keys);			//"name, age";

var keys = Object.getOwnPropertyNames(Person.prototype);
alert(keys);		//"constructor,name,age,job,sayName"

//3.更简单的原型语法
function Person(){
}
Person.prototype = {
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function() {
		alert(this.name);
	}
};

var friend = new Person();
alert(friend instanceof Object);		//true
alert(friend instanceof Person);		//true
alert(friend.constructor == Person);	//false
alert(friend.constructor == Object);	//true

function Person(){
}
Person.prototype = {
	constructor : Person,
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function() {
		alert(this.name);
	}
};

function Person(){
}
Person.prototype = {
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function() {
		alert(this.name);
	}
};
//重设构造函数，只适用于ECMAScript 5兼容的浏览器
Object.defineProperty(person.prototype, "constructor", {
	enumerable: false,
	value: Person
});

//4.原型的动态性
var friend = new Person();
Person.prototype.sayHi = function(){
	alert("hi");
};
friend.sayHi();	//"hi"(没有问题！！)

function Person(){
}
var friend = new Person();
Person.prototype = {
	constructor: Person,
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function() {
		alert(this.name);
	}
};
friend.sayName();		//error

//5.原生对象的原型
alert(typeof Array.prototype.sort);		//"function"
alert(typeof String.prototype.substring);	//"function"

String.prototype.startsWith = function (text) {
	return this.indexOf(text) == 0;
};
var msg = "Hello world!";
alert(msg.startsWith("Hello"));  //true

//6.原型对象问题
function Person(){
}
Person.prototype = {
	constructor: Person,
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	friends : ["Shelby", "Court"],
	sayName : function() {
		alert(this.name);
	}
};
var person1 = new Person();
var person2 = new Person();
person1.friends.push("Van");
alert(person1.friends);		//"Shelby,Court,Van"
alert(person2.friends);		//"Shelby,Court,Van"
alert(person1.friends === person2.friends);	//true

//6.2.4 组合使用构造函数模式和原型模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Shelby", "Court"];
}
Person.prototype = {
	constructor : Person,
	sayName : function(){
		alert(this.name);
	}
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
alert(person1.friends);		//"Shelby,Court,Van"
alert(person2.friends);		//"Shelby,Court"
alert(person1.friends === person2.friends);		//false
alert(person1.sayName === person2.sayName);		//true

//6.2.5 动态原型模式
function Person(name, age, job){
	//属性
	this.name = name;
	this.age = age;
	this.job = job;
	//方法
	if(typeof this.sayName != "function"){
		Person.prototype.sayName = function(){
			alert(this.name);
		};
	}
}
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();

//6.2.6 寄生构造函数模式
function Person(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name);
	};
	return Object;
}
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();	//"Nicholas"

function SpecialArray(){
	//创建数组
	var values = new Array();
	//添加值
	values.push.apply(values, arguments);
	//添加方法
	values.toPipedString = function(){
		return this.join("|");
	};
	//返回数组
	return values;
}
var colors = new SpecialArray("red", "blue", "green");
alert(colors.toPipedString());		//"red|blue|green"

//6.2.7 稳妥构造函数模式
function Person(name, age, job){
	//创建要返回的对象
	var o = new Object();
	//可以在这里定义私有变量和函数

	//添加方法
	o.sayName = function() {
		alert(name);
	};
	//返回对象
	return o;
}

var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName();	//"Nicholas"