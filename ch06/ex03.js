//6.3 继承
//6.3.1 原型链
function SuperType(){
	this.property = true;
}
SuperType.prototype.getSuperValue = function(){
	return this.property;
};

function SubType(){
	this.subproperty = false;
}
//继承了SuperType()
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function(){
	return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue());		//true

//1.别忘记默认的原型
//2.确定原型和实例的关系
alert(instance instanceof Object);		//true
alert(instance instanceof SuperType);	//true
alert(instance instanceof SubType);		//true
//isPrototypeOf是用来判断指定对象object1是否存在于另一个对象object2的原型链中,是则返回true,否则返回false。
alert(Object.prototype.isPrototypeOf(instance));	//true
alert(SuperType.prototype.isPrototypeOf(instance));	//true
alert(SubType.prototype.isPrototypeOf(instance));	//true

//3.谨慎的定义方法
function SuperType(){
	this.property = true;
}
SuperType.prototype.getSuperValue = function(){
	return this.property;
};
function SubType(){
	this.subproperty = false;
}
SubType.prototype = new SuperType();
//添加新方法
SubType.prototype.getSubValue = function(){
	return this.subproperty;
};
//重写超类型中的方法
SubType.prototype.getSuperValue = function(){
	return false;
};
var instance = new SubType();
alert(instance.getSuperValue());		//false


function SuperType(){
	this.property = true;
}
SuperType.prototype.getSuperValue = function(){
	return this.property;
};
function SubType(){
	this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
//使用字面量添加新方法，会导致上一行代码无效
SubType.prototype = {
	getSubValue : function(){
		return this.subproperty;
	},
	someOtherMethod : function(){
		return false;
	}
};
var instance = new SubType();
alert(instance.getSuperValue());		//error! 原型链已经被切断，二者已经没有联系啦

//4.原型链的问题
function SuperType(){
	this.colors = ["red", "blue", "green"];
}
function SubType(){
}
//继承了 SubType()
SubType.prototype = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);		//"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors);		//"red,blue,green,black"

//6.3.2 借用构造函数
function SuperType(){
	this.colors = ["red", "blue", "green"];
}
function SubType(){
	//继承了SuperType
	SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);		//"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors);		//"red,blue,green"

//1.传递参数
function SuperType(name){
	this.name = name;
}
function SubType(){
	//继承了SuperType,同时还传递了参数
	SuperType.call(this, "Nicholas");
	this.age = 29;
}
var instance = new SubType();
alert(instance.name);		//"Nicholas"
alert(instance.age);		//29

//6.3.3 组合继承
function SuperType(name){
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
	alert(this.name);
};
function SubType(name, age){
	//继承属性
	SuperType.call(this, name);
	this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
	alert(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);		//"red,blue,green,black"
instance1.sayName();			//"Nicholas"
instance1.sayAge();				//"29"

var instance2 = new SubType("Greg", 27);
alert(instance2.colors());		//"red,blue,green"
instance2.sayName();			//"Greg";
instance2.sayAge();				//27

//6.3.4 原型式继承
function object(o){
	function F(){
		F.prototype = o;
		return new F();
	}
}

var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push["Rob"];
var yetAnotherPerson = Object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barble");
alert(person.friends);		//"Shelby, Court, Van, Rob, Barble"

var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barble");
alert(person.friends);		//"Shelby,Court,Van,Rob,Barble"

var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = Object.create(person, {
	name: {
		value: "Greg"
	}
});
alert(anotherPerson.name);			//"Greg"

//6.3.5 寄生式继承
function createAnother(original){
	var clone = object(original);	//通过调用函数创建一个新对象
	clone.sayHi = function(){		//以某种方式来增强这个对象
		alert("hi");		
	};
	return clone;			//返回这个对象
}

var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();		//"Hi"

//6.3.6 寄生组合式继承
function SuperType(name){
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
	alert(this.name);
};
function SubType(name, age){
	SuperType.call(this, name);				//第二次调用SuperType()
	this.age = age;
}
SubType.prototype = new SuperType();		//第一次调用SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
	alert(this.age);
};

function inheritPrototype(subType, superType){
	var prototype = object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}

function SuperType(name){
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
	alert(this.name);
};
function SubType(name, age){
	SuperType.call(this, name);
	this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function(){
	alert(this.age);
};
























