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