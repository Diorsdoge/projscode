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


































