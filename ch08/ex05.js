//8.5 history对象
//后退一页
history.go(-1);
//前进一页
history.go(1);
//前进两页
history.go(2);

//跳转到最近的wrox.com页面
history.go("baidu.com");
//跳转到最近的diorsgame.com页面
history.go("diorsgame.com");

//后退一页
history.back();
//前进一页
history.forward();

if (history.length == 0){
	//这应该是用户打开窗口后的第一个页面
}