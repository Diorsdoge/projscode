//3.6 语句
//3.6.1 if语句
if (i > 25) {
	alert("Greater than 25.");
}else{
	alert("Less than or equal to 25.");
}

if (i > 25) {
	alert("Greater than 25.");
}else if(i < 0){
	alert("Less than 0.");
}else{
	alert("Between 0 and 25, inclusive.");
}

//3.6.2 do-while语句
var i = 0;
do{
	i += 2;
}while(i < 10);
alert(i);

//3.6.3 while语句
var i = 0;
while(i < 10){
	i += 2;
}

//3.6.4 for语句
var count = 10;
for(var i = 0; i < count; i++){
	alert(i);
}

var count = 10;
var i = 0;
while(i < count){
	alert(i);
	i++;
}

var count = 10;
for(var i = 0; i < count; i++){
	alert(i);
}
alert(i);   //10 这个例子会有一个警告框显示循环完成后变量i的值。这个值是10

var count =10;
var i = 0;
for(; i < count; ){
	alert(i);
	i++;
}

//3.6.5 for-in语句
//for-in语句是一种精准的迭代语句， 可以用来枚举对象的属性。
for(var propName in window){
	document.write(propName);
}

//3.6.6 label语句
//语法：label：statement  在代码中添加标签，以便将来使用
start: for(var i = 0; i < count; i++){
	alert(i);
}

//3.6.7 break和continue语句
var num = 0;
for(var i = 1; i < 10; i++){
	if(i % 5 == 0){
		break;
	}
	num++;
}
alert(num);       //4

var num = 0;
for(var i = 1; i < 10; i++){
	if(i % 5 == 0){
		continue;
	}
	num++;
}
alert(num);    //8

//break和continue都可以与label语句联合使用
var num = 0;
outermost:
for(var i = 0; i < 10; i++){
	for(var j = 0; j < 10; j++){
		if(i == 5 && j == 5){
			break outermost;
		}
		num++;
	}
}
alert(num);      //55

var num = 0;
outermost:
for(var i = 0; i < 10; i++){
	for(var j = 0; j < 10; j++){
		if(i == 5 && j == 5){
			continue outermost;
		}
		num++;
	}
}
alert(num);      //95

//3.6.8 with语句
//with语句的作用是将代码的作用域设置到一个特定的对象中。
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
//上面几行都包含了location对象。严格模式下不允许使用with语句
with(location){
	var qs = search.substring(1);
	var hostName = hostname;
	var url = href;
}

//3.6.9 switch语句
switch(i){
	case 25:
		alert("25");
		break;
	case 35:
		alert("35");
		break;
	case 45:
		alert("45");
		break;
	default:
		alert("Other");
}
//合并两种情形
switch(i){
	case 25:
		/*合并两种情形*/
	case 35:
		alert(" 25 or 35");
		break;
	case 45:
		alert("45");
		break;
	default:
		alert("Other");
}
//不一定是常量，可以是变量，甚至表达式
switch("hello world") {
	case "hello" + "world":
		alert("Greating was found.");
		break;
	case "goodbye":
		alert("Closing was found");
		break;
	default:
		alert("Unexpected message was found.");
}

var num = 25;
switch (true){
	case num < 0:
		alert("less than 0.");
		break;
	case num >= 0 && num <= 10:
		alert("Between 0 and 10.");
		break;
	case num >10 && num <= 20:
		alert("Between 10 and 20.");
		break;
	default:
		alert("More than 20.");
}

//3.7 函数
function sayHi(name, message) {
	alert("Hello " + name + "," + message);
}

function sum(num1, num2) {
	return num1 + num2;
}

function sum(num1, num2) {
	return num1 + num2;
	alert("Hello world");     //永远不会执行
}

function diff(num1, num2) {
	if (num1 < num2) {
		return num2 - num1;
	}else{
		return num1 - num2;
	}
}
function sayHi(name , message) {
	return;
	alert("Hello " + name + "," + message);
}

//3.7.1理解参数
function sayHi() {
	alert("Hello " + arguments[0] + "," + arguments[1]);
}    //hello undefined,undefined

function howManyArgs() {
	alert(arguments.length);
}

howManyArgs("string", 45);    //2
howManyArgs();       //0
howManyArgs(12);     //1

function doAdd() {
	if(arguments.length == 1) {
		alert(arguments[0] + 10);
	}else if(arguments.length == 2) {
		alert(arguments[0] + arguments[1]);
	}
}

doAdd(10);     //20
doAdd(30, 20);   //50

function doAdd(num1, num2) {
	if(arguments.length == 1) {
		alert(num1 + 10);
	}else if(arguments.length == 2) {
		alert(arguments[0] + num2);
	}
}

function doAdd(num1, num2) {
	arguments[1] = 10;
	alert(arguments[0] + num2);
}

//3.7.2没有重载

function addSomeNumber(num) {
	return num + 100;
}

function addSomeNumber(num) {
	return num +200;
}

var result = addSomeNumber(100);   //300