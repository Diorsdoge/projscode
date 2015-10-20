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

//按位异或
var result = 25 ^ 3;
alert(result); //26

//左移
var oldValue = 2;      //等于二进制的10
var newValue = oldValue << 5;    //64,等于二进制的1000000
//有符号的右移
var oldValue = 64;       //等于二进制的1000000
var newValue = oldValue >> 5;      //等于二进制的10，十进制的2

//无符号右移
var oldValue = 64; //等于二进制的1000000
var newValue = oldValue >>> 5;    //等于二进制的10.即十进制的2

var oldValue = -64;   //等于二进制的111111111111111111111111111000000
var newValue = oldValue >>> 5;  //等于是十进制的134217726

//3.5.3 布尔操作符
//逻辑非
alert(!false);   //true
alert(!"blue");   //false
alert(!0);   //true
alert(!NaN);    //true
alert(!"");    //true
alert(!12345);  //false

//逻辑与
var result = true && false;

var found = true;
var result = (found && someUndefinedVariable);
alert(result);

var result = false;
var result = (found && someUndefinedVariable);
alert(result);
//逻辑或
var result = true || false;
var found = true;
var result = (found || someUndefinedVariable);
alert(result);

var myObject = preferredObject || backupObject;//我们可以利用逻辑或的这一行为来避免为变量赋null或undefined值。

//3.5.4 乘性操作符
//乘法
var result = 34 * 56;
//除法
var result = 66 / 11;   //6
//求模
var result = 26 % 5;    //1

//3.5.5 加性操作符
//加性操作符
//加法
var result = 1 + 2;
var result1 = 5 + 5;   //两个数值相加
alert(result1);    //10
var result2 = 5 + "5";   //一个数值和一个字符串相加
alert(result2);     //"55"

var num1 = 5;
var num2 = 10;
var message = "The sum of 5 and 10 is " + num1 + num 2;
alert(message);    //"The sum of 5 and 10 is 510"

var num1 = 5;
var num2 = 10;
var message = "The sum of 5 and 10 is " + (num1 + num2);
alert(message);

//减法
var result = 2 - 1;      
var result1 = 5 - true;   //4，因为true被撞成了1
var result2 = NaN - 1;    //NaN
var result3 = 5 - 3;       //2
var result4 = 5 - "";      //5,因为转换成了0
var result5 = 5 - "2";      //3,因为“2”被转换成了2
var result6 = 5 - null;     //5，因为null被转成了0

//3.5.6关系操作符
var result1 = 5 > 3;	//true
var result2 = 5 < 3;    //false

var result = "Brick" < "alphabet";     //true

var result = "Brick".toLowerCase() < "alphabet".toLowerCase();  //false

var result = "23" < "3";    //true

var result = "23" < 3;     //false

var result = "a" < 3;       //false, 因为a被换成了NaN

var result1 = NaN < 3;   //false
var result2 = NaN >=3;    //false

//3.5.7相等操作符 
var result1 = ("55" == 55);   //true,因为转换后相等
var result2 = ("55" === 55);   //false,因为不同的数据类型

var result1 = ("55" != 55);   //false,因为转换后相等
var result2 = ("55" !== 55);   //true
//记住：null ＝＝ undefined 会返回true  但null === undefined 会返回false

//3.5.8 条件操作符
var max = (num1 > num2) ? num1 : num2;

//3.5.9 复制操作符
var num = 10;
num = num + 10;   //num += 10;

//3.5.10 逗号操作符
var num1 = 1, num2 = 2, num3 = 3;
var num = (5, 1, 4, 8, 0);    //num的值为0
