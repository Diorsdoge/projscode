//3.4.1 typeof操作符
var message1 = "some string";
alert(typeof(message1)); // "string"
alert(typeof message1);  // "string"
alert(typeof 95);   //"number"

//3.4.2 Undefined 类型
var message2;
alert(message2 == undefined);  // true

//3.4.3 null类型
var car = null;
alert(typeof car);  //"object"

//3.4.4 Boolean类型
alert(null == undefined);   //true

//3.4.5 Number类型
alert(NaN == NaN);  //false
alert(isNaN(10));  //false
alert(isNaN(NaN));  //false
alert(isNaN("10"));  //false
alert(isNaN("blue"));  //true
alert(isNaN("true"));   //false

var num1 = Number("Hello World");   //NaN
var num2 = Number(" ");  //0
var num3 = Number("000011");   //11
var num4 = Number(true);   //1

var num1 = parseInt("1234blue");  //1234
var num2 = parseInt(" ");   //NaN
var num3 = parseInt("0xA");    //10
var num4 = parseInt(22.5);   //22
var num5 = parseInt("070");   //56（八进制）
var num6 = parseInt("70");   //70（十进制）
var num7 = parseInt("0xf");  //15 (十六进制)

//为了避免照成困扰，使用第二个参数

var num = parseInt("0xAF", 16);   //175
var num1 = parseInt("AF",16);   //175
var num2 = parseInt("AF");   //NaN

var num1 = parseFloat("1234blue");  //1234
var num2 = parseFloat("0xA");  //0
var num3 = parseFloat("22.5"); //22.5
var num4 = parseFloat("22.34.5");  //22.34
var num5 = parseFloat("0908.5");    //908.5
var num6 = parseFloat("3.125e7");    //31250000

//3.4.6 String类型
var firstName = "Nicholas";
var lastName = 'Zakas';

var text = "This is the letter sigma: \u03a3.";
alert(text.length);//输出28，其中六个字符长的转义序列表示一个字符

var lang ="Java";
lang = lang + "Script";

var age = 11;
var ageAsString = age.toString();   //字符串“11"
var found = true;
var foundAsString = found.toString();   //字符串"true"

//toString可以输出二进制，八进制，十六进制
var num = 10;
alert(num.toString());   //"10"
alert(num.toString(2));   //"1010"
alert(num.toString(8));    //"12"
alert(num.toString(10));   //"10"
alert(num.toString(16));    //"a"

//在不知道要转换的值是不是null或着undefined的时候，用String()
var value1 = 10;
var value2 = true;
var value3 = null;
var value4;

alert(String(value1));  //"10"
alert(String(value2));  //"true"
alert(String(value3));  //"null"
alert(String(value4));  //"undefined"

//Object类型

var o ＝ new object();
