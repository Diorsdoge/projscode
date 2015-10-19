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
