//5.3 Date类型

var now = new Date();
//要为2004年5月25日创建一个日期对象
var someDate = new Date(Date.parse("May 25, 2004"));
var someDate = new Date("May 25, 2004");  //和上一个等价

//GMT时间2000年1月1号午夜零时
var y2k = new Date(Date.UTC(2000, 0));
//GMT时间2005年5月5日下午5:55:55
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

//本地时间2000年1月1日午夜零时
var start =new Date(2000, 0);
//本地时间2005年5月5日下午5:55:55
var allFives = new Date(2005, 4, 5, 17, 55, 55);

//取得时间
var start = Date.now();
//调用函数
doSomething();
//取得停止时间
var stop = Date.now(),
	result = stop - start;

//取得开始时间
var  start = +new Date();
//调用函数
doSomething();
//取得停止时间
var stop = +new Date(),
	result = stop - start;

//5.3.1 继承的方法
var date1 = new Date(2007, 0, 1);    //"January 1, 2007"
var date2 = new Date(2007, 1, 1);     //"February 1, 2007"
alert(date1 < date2);   //true
alert(date1 > date2);    //false

//日期的方法有很多，书上很详细











