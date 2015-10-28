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
