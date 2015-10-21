//4.1 基本类型和引用类型的值
//4.1.1 动态的属性
var person = new Object();
person.name = "Nicholas";
alert("person.name");   //Nicholas

//我们不能给基本类型的值添加属性
var name = "Nicholas";
name.age = 27;
alert(name.age);    //undefined

//4.1.2 复制变量值
var num1 = 5;
var num2 = num1;

var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
alert(obj2.name);    //Nicholas  obj1 和 obj2指向的同一个对象

//4.1.3 传递参数
function addTen(num) {
	num += 10;
	return num;
} 
var count = 20;
var result = addTen(count);
alert(count);   //20
alert(result);   //30

function setName(obj) {
	obj.name = "Nicholas";
}
var person = new Object();
setName(person);
alert(person.name);    //Nicholas

function setName(obj) {
	obj.name = "Nicholas";
	obj = new Object();
	obj.name = "Greg"
}
var person = new Object();
setName(person);
alert(person.name);   //Nicholas     setName中有个局部对象，搞完之后立刻被销毁

//4.1.4 检测类型
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();
alert(typeof s);    //string
alert(typeof i);    //number
alert(typeof b);    //boolean
alert(typeof u);     //undefined
alert(typeof n);    //object
alert(typeof o);    //object

//instanceof 的用法
alert(person instanceof Object);    //量变person是object吗？
alert(colors instanceof Array);     //变量colors是array吗？
alert(pattern instanceof RegExp);    //变量pattern是regexp吗？