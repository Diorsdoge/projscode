//第8章 BOM
//8.1 window对象
//8.1.1 全局作用域
var age = 29;
function sayAge(){
	alert(this.age);
}
alert(window.age);		//29
sayAge();				//29
window.sayAge();		//29

var age = 29;
window.color = "red";

//在ie < 9时抛出错误，在其他所有浏览器中都返回false
delete window.age;
//在ie < 9时抛出错误，在其他所有浏览器中都返回true
delete window.color;	//returns true
alert(window.age);		//29
alert(window.color);	//undedined

//这里会抛出错误，因为oldValye未定义
var newValue = oldValue;
//这里不会抛出错误，因为这是一次属性查询
//newValue的值是undefined
var newValue = window.oldValue;

//下面是一个包含框架的页面：
<html>
	<head>
		<title>Frameset Example</title>
	</head>
	<frameset rows="160,*">
		<frame src="frame.htm" name="topFrame">
		<frameset cols="50%,50%">
			<frame src="anotherframe.htm" name="leftFrame">
			<frame src="yetanotherframe.htm" name="rightFrame">
		</frameset>
	</frameset>
</html>

//8.1.3 窗口位置
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;

//将窗口移动到屏幕左上角
window.moveTo(0,0);
//将窗口向下移动100像素
window.moveTo(0,100);
//将窗口移动到(200,300)
window.moveTo(200,300);
//将窗口左移50像素
window.moveTo(-50,0);

//8.1.4 窗口大小
var pageWidth = window.innerWidth,
	pageHeight = window.innerHeight;
if (typeof pageWidth != "number"){
	if (document.compatMode == "CSS1Compat"){
		pageWidth = document.documentElement.clientWidth;
		pageHeight = document.documentElement.clientHeight;
	} else {
		pageWidth = document.body.clientWidth;
		pageHeight = document.body.clientHeight;
	}
}

//调整到100x100
window.resizeTo(100,100);
//调整到200x150
window.resizeBy(100,50);
//调整到300x300
window.resizeTo(300,300);

//8.1.5 导航和打开窗口
//等同于 <a href="http://baidu.com" target="topFrame"></a>
window.open("http://baidu.com", topFrame);

//1.弹出窗口
//打开一个心得可以调整大小的窗口，初始大小为400X400像素，距离上沿河左沿10像素
window.open("http://baidu.com","wroxWindow","height=400,width=400,top=10,left=10,resizable=yes");

var wroxWin = window.open("http://baidu.com","wroxWindow","height=400,width=400,top=10,left=10,resizable=yes");
//调整大小
wroxWin.resizeTo(500,500);
//移动位置
wroxWin.moveTo(100,100);
//调用close()方法还可以关闭心打开的窗口
wroxWin.close();

wroxWin.close();
alert(wroxWin.closed);		//true

var wroxWin = window.open("http://baidu.com","wroxWindow","height=400,width=400,top=10,left=10,resizable=yes");
alert(wroxWin.opener == window);		//true

var wroxWin = window.open("http://baidu.com","wroxWindow","height=400,width=400,top=10,left=10,resizable=yes");
wroxWin.opener = null;

//2.安全限制
//3.弹出窗口屏蔽程序
var wroxWin = window.open("http://www.wrox.com","_blank");
if (wroxWin == null) {
	alert("The popup was blocked");
}

var blocked = false;
try {
	var wroxWin = window.open("http://www.wrox.com", "_blank");
	if (wroxWin == null) {
		blocked = true;
	}
} catch(ex) {
	blocked = true;
}
if (blocked) {
	alert("The popup was blocked");
}

//8.1.6 间歇调用和超时调用
//不建议传递字符串
setTimeout("alert('Hello world!') ", 1000);
//推荐使用方式
setTimeout(function(){
	alert("Hello world!");
}, 1000);

//设置超时调用
var timeoutId = setTimeout(function(){
	alert("Hello world");
}, 1000);
//注意：把它取消
clearTimeout(timeoutId);

//不建议传递字符串！
setInterval("alert('Hello world!)", 10000);
//推荐的调用方式
setInterval(function(){
	alert("Hello world!");
}, 10000);

var num = 0;
var max = 10;
var intervalId = null;
function incrementNumber(){
	num++;
	//如果执行次数达到了max设定的值，则取消后续未执行的调用
	if (num = max) {
		clearInterval(intervalId);
		alert("Done");
	}
}
intervalId = setInterval(incrementNumber, 500);

var num = 0;
var max = 10;
function incrementNumber() {
	num++;
	//如果执行次数未达到max设定的值，则设置另一次超时调用
	if (num < max) {
		setTimeout(incrementNumber, 500);
	} else {
		alert("Done");
	}
}
setTimeout(incrementNumber, 500);

//8.1.7 系统对话框
if (comfirm("Are you sure?")) {
	alert("I'm so glad you're sure! ");
} else {
	alert("I'm sorry to hear you're not sure. ");
}

var result = prompt("What is your name?"," ");
if (result !== null) {
	alert("Welcome, " + result);
};

//显示"打印"对话框
window.print();
//显示"查找"对话框
window.find();