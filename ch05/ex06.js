//5.6 基本包装类型
var s1 = "some text";
var s2 = s1.substring(2);]\

var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null;

var s1 = "some text";
s1.color = "red";
alert(s1.color);    //undefined

var obj = new Object("some text");
alert(obj instanceof String);		//true

var value = "25";
var number =Number(value);	//转型函数
alert(typeof number);		//"number"
var obj = new Number(value);//构造函数
alert(typeof obj);			//"object"

//5.6.1 Boolean类型
var booleanObejct = new Boolean(true);

var falseObject = new Boolean(false);	//所有对象都为true
var result = falseObject && true;
alert(result);			//true
var falseValue = false;
result = falseValue && true;
alert(result);			//false

alert(typeof falseObject);	//object
alert(typeof falseValue);	//boolean
alert(falseObject instanceof Boolean);	//true
alert(falseValue instanceof Boolean);	//false

//5.6.2 Number类型
var numberObject = new Number(10);

var num = 10;
alert(num.toString());		//"10"
alert(num.toString(2));		//"1010"
alert(num.toString(8));		//"12"
alert(num.toString(10));	//"10"
alert(num.toString(16));	//"a"

var num = 10;
alert(num.toFixed(2));		//"10.00"

var num = 10;
alert(num.toExponential(1));	//"1.0e+1"

var num = 99;
alert(num.toPrecision(1));		//"1e+2"
alert(num.toPrecision(2));		//"99"
alert(num.toPrecision(3));		//"99.0"

var numberObject = new Number(10);
var numberValue = 10;
alert(typeof numberObject);		//"object"
alert(typeof numberValue);		//"number"
alert(numberObject instanceof Number);	//true
alert(numberValue instanceof Number);	//false

//5.6.3 String类型
var stringObject = new String("Hello world");

var stringValue = "Hello world";
alert(stringValue.length);		//"11"

//1.字符方法
var stringValue = "hello world";
alert(stringValue.charAt(1));		//"e"
alert(stringValue.charCodeAt(1));	//"101"
alert(stringValue[1]);				//"e"

//2.字符串操作方法
var stringValue = "hello ";
var result = stringValue.concat("world");
alert(result);				//"hello world"
alert(stringValue);			//"hello"

var stringValue = "hello world";
alert(stringValue.slice(3));		//"lo world"
alert(stringValue.substring(3));	//"lo world"
alert(stringValue.substr(3));		//"lo world"
alert(stringValue.slice(3, 7));		//"lo w"
alert(stringValue.substring(3, 7));	//"lo w"
alert(stringValue.substr(3, 7));		//"lo worl"

var stringValue = "hello world";
alert(stringValue.slice(-3));		//"rld"
alert(stringValue.substring(-3));	//"hello world"
alert(stringValue.substr(-3));		//"rld"
alert(stringValue.slice(3, -4));	//"hel"
alert(stringValue.substr(3, -4));	//""(空字符串)

//3.字符串的位置方法
var stringValue = "hello world";
alert(stringValue.indexOf("o"));		//4
alert(stringValue.lastIndexOf("o"));	//7

var stringValue = "hello world";
alert(stringValue.indexOf("o", 6));		//7
alert(stringValue.lastIndexOf("o", 6)); //4

var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while(pos > -1) {
	positions.push(pos);
	pos = stringValue.indexOf("e",pos + 1);
}
alert(positions);			//"3,24,32,35,52"

//4.trim()方法
var stringValue = "    hello world     ";
var trimmedStringValue = stringValue.trim();
alert(stringValue);			//"     hello world     "
alert(trimmedStringValue);		//"hello world";

//字符串大小写转换方法
var stringValue = "hello world";
alert(stringValue.toLocaleUpperCase());	//"HELLO WORLD"
alert(stringValue.toUpperCase)();		//"HELLO WORLD"
alert(stringValue.toLocaleLowerCase());	//"hello world"
alert(stringValue.toLowerCase());//("hello world")

//6.字符串的模式匹配方法
var text = "cat, bat, sat, fat";
var pattern = /.at/;
//与pattern.exec(text)相同
var matches = text.match(pattern);
alert(matches.index);		//0
alert(matches[0]);		//"cat"
alert(pattern.lastIndex);	//0

var text = "cat, bat, sat, fat";
var pos = text.search(/at/);		//存在返回1 不再返回-1
alert(pos);		//1

var text = "cat, bat, sat, fat";
var result = text.replace("at","ond");
alert(result);		//"coud, bat, sat, fat"
result = text.replace(/at/g, "ond");
alert(result);		//"cond, bond, sond,fond"

var text = "cat, bat, sat, fat";
result = text.replace(/(.at)/g, "word ($1)");
alert(result);		//word(cat), word(bat), word(sat), word(fat)

function htmlEscape(text){
	return text.replace(/[<>"&]/g, function(match, pos, originalText){
		switch(match){
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case "&":
				return "&amp;";
			case "\"":
				return "&quot;";
		}
	});
}
alert(htmlEscape("<p class = \"greeting\">Hello world!</p>")); //$lt;p class=&quot;greeting&quot;&gt;Hello world!&ltl/p&gt;

var colorText = "red,blue,green,yellow";
var color1 = colorText.split(",");		//["red", "blue", "green", "yellow"]
var color2 = colorText.split(",", 2);	//["red", "blue"]
var color3 = colorText.split[/[^\,]+/]);	//["", ",", ",", ",", ""]

//7.localeCompare()方法
var stringValue = "yellow";
alert(stringValue.localeCompare("brick"));		//1
alert(stringValue.localeCompare("yellow"));		//0
alert(stringValue.localeCompare("zoo"));		//-1

function determineOrder(value) {
	var result = stringValue.localeCompare(value);
	if (result < 0){
		alert("The string 'yellow' comes before the string '" + value + "'.");
	} else if (result > 0){
		alert("The string 'yellow' comes after the string '" + value +"'.");
	} else {
		alert("The string 'yellow' is equal to the string '" + value + "'." );
	}
}
determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");

//8.fromCharCode()方法
alert(String.fromCharCode(104, 101, 108, 108, 111));		//"hello"

//9.HTML方法
