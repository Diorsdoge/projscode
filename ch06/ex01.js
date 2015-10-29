//第六章 面向对象的程序设计
//6.1 理解对象
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";

person.sayName = function(){
	alert(this.name);
};
//前面的语法可以写成下面那样
var person = {
	name: "Nicholas";
	age: 29;
	job: "Software Engineer";

	sayName: function(){
		alert(this.name);
	}
};

//6.1.1 属性类型
//1.数据属性
var person = {
	name: "Nicholas";
};

var person = {};
Object.defineProperty(person, "name", {
	writable: false,
	value: "Nicholas"
});
alert(person.name);	//"Nicholas"
person.name = "Greg";
alert(person.name);	//"Nocholas"

var person = {
	name: "Nicholas";
};

var person = {};
Object.defineProperty(person, "name", {
	configurable: false,
	value: "Nicholas"
});
alert(person.name);	//"Nicholas"
delete person.name;
alert(person.name);	//"Nocholas"
//configurable设置为false,表示不能从对象中删除属性

//2. 访问器属性
var book = {
	_year: 2004,    //表示只能通过对象的方法访问的属性
	edition: 1
};
Object.defineProperty(book, "year", {
	get: function(){
		return this._year;
	},
	set: function(newValue){
		if (newValue > 2004) {
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
});
book.year = 2005;
alert(book.edition);		//2


var book = {
	_year: 2004,
	edition: 1
};
//定义访问旧方法
book.__defineGetter__("year", function(){
	return this.year;
});
book.__defineGetter__("year", function(newValue){
	if (newValue > 2004) {
		this._year = newValue;
		this.edition += newValue - 2004;
	}
});
book.year = 2005;
alert(book.edition);		//2

//6.1.2 定义多个属性
var book = {};
Object.defineProperties(book, {
	_year: {
		value: 2004
	},
	edition: {
		value: 1
	},
	year: {
		get: function(){
			return this._year;
		},
		set: function(){
			if(newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});

//6.1.2 读取属性的特性
var book = {};
Object.defineProperties(book, {
	_year: {
		value: 2004
	},
	edition: {
		value: 1
	},
	year: {
		get: function(){
			return this._year;
		},
		set: function(newValue){
			if (newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value);		//2004
alert(descriptor.configurable);	//false
alert(typeof descriptor.get);	//"undefined"

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor.value);		//undefined
alert(descriptor.enumerable);	//false
alert(typeof descriptor.get);	//"function"

























