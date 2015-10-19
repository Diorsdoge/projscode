//3.5.1 一元操作符

//1.递增递减操作符
var age = 29;
++age;

var age = 29;
var anotherAge = --age + 2;
alert(age);   //28
alert(anotherAge);   //30

var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2;   //21
var num4 = num1 + num2;   //21

var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;
var num4 = num1 + num2;

var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
	valueOf: function(){
		return -1;
	}
};
s1++;   //3
s2++;    //NaN
v++;     //1
f--;     //0.10000000000000000009
o--;     //-2

//2.一元加和减操作符

var num = 25;
num = +num;  // 仍然是25

var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
	valueOf: function(){
		return -1;
	}
};
s1 = +s1; //1
s2 = +s2; //1.1
s3 = +s3;  //NaN
b = +b;  //0
f = +f;  //1.1
o = +o;   //-1

var num = 25;
num = -num;    //变成了-25

var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
	valueOf: function(){
		return -1;
	}
};
s1 = -s1;    //-1
s2 = -s2;   //-1.1
s3 = -s3;    //NaN
b = -b;     //0
f = -f;      //-1.1
o = -o;      //1

//3.5.2 位操作符
var num = -18;
alert(num.toString(2));   // "-10010"

//1.按位非(NOT)
var num1 = 25;      //二进制 00000000000000000000000000011001
var num2 = ~num1;   //二进制 11111111111111111111111111100110
alert(num2);        //-26

var num1 = 25;
var num2 = -num1 - 1;
alert(num2);        //*-26*

//按位与(AND)
var result = 25 & 3;
alert(result); //1

//按位或(OR)
var result = 25 | 3;
alert(result);   //27





