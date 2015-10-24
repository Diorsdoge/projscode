//5.4 RegExp 类型
//匹配字符串中所有"at"的实例
var pattern1 = /at/g;
//匹配第一个"bat"或者"cat",不区分大小写
var pattern2 = /[bc]at/i;
//匹配所有以"at"结尾的3个字符的组合，不区分大小写
var pattern3 = /.at/gi;

//匹配第一个"bat"或"cat",不区分大小写
var pattern1 = /[bc]at/i;
//匹配第一个"[bc]at",不区分大小写
var pattern2 = /\[bc\]at/i;
//匹配所有以"at"结尾的3个字符的组合，不区分大小写
var pattern3 = /.at/gi;
//匹配所有".at"，不区分大小写
var pattern4 = /\.at/gi;

//匹配第一个"bat"或"cat",不区分大小写
var pattern1 = /[bc]at/i;
//用构造函数
var pattern2 = new RegExp("[bc]at","i");

//一个新实例
var re = null,
	i;
for (i = 0; i < 10; i++){
	re = /cat/g;
	re.test("catastrophe");
}
for (i = 0; i < 10; i++){
	re = new RegExp("cat", "g");
	re.test("catastrophe");    //第二次调用是从上一次的末端开始的，所以找不到啦
}

//5.4.1 RegExp实例
var pattern1 = /\[bc\]at/i;
alert(pattern1.global);           //false    是否设置了g标志
alert(pattern1.ignoreCase);			//true		是否设置了i标志
alert(pattern1.multiline);			//false		是否设置了m标志
alert(pattern1.lastIndex);			//0			表示搜索下一个匹配项的字符位置，从0算起。
alert(pattern1.source);				//"\[bc\]at"  

var pattern2 = new RegExp("\\[bc\\]at","i");
alert(pattern2.global);           //false    是否设置了g标志
alert(pattern2.ignoreCase);			//true		是否设置了i标志
alert(pattern2.multiline);			//false		是否设置了m标志
alert(pattern2.lastIndex);			//0			表示搜索下一个匹配项的字符位置，从0算起。
alert(pattern2.source);				//"\[bc\]at"

//5.4.2 RegExp实例方法
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);   //exec 专门为捕获组而设计
alert(matches.index);     //0
alert(matches.input); 		//"mom and dad and baby"
alert(matches[0]);			//"mom and dad and baby"
alert(matches[1]);			//" and dad and baby"
alert(matches[2]);			//" and baby"


var text = "cat, bat, sat, fat";
var pattern1 = /.at/;
var matches = pattern1.exec(text);
alert(matches.index);					//0
alert(matches[0]);						//cat
alert(pattern1.lastIndex);				//0

matches = pattern1.exec(text);
alert(matches.index);					//0
alert(matches[0]);						//cat  没用全局 每次exec都是cat
alert(pattern1.lastIndex);				//0		没用全局 不变

var pattern2 = /.at/g;
var matches = pattern2.exec(text);
alert(matches.index); 					//0
alert(matches[0]);						//cat
alert(pattern2.lastIndex);				//0

matches = pattern2.exec(text);
alert(matches.index);					//5
alert(matches[0]);						//bat   用了全局  第二次编程bat
alert(pattern2.lastIndex);				//8      用了全局   变变变


var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;
if (pattern.test(text)){
	alert("The pattern was matches.");
}

var pattern = new RegExp("\\[bc\\]at", "gi");
alert(pattern.toString());    			//     /\[bc\]at/gi
alert(pattern.toLocaleString());    	//		/\[bc\]at/gi

//5.4.3 RegExp构造函数属性
var text = "This has been a short summer";
var pattern = /(.)hort/g;
if (pattern.test(text)){
	alert(RegExp.input);			//this has been a short summer 最近一次要匹配的字符串
	alert(RegExp.leftContext);		//this has been a      input字符串中lastmatch之前的文本
	alert(RegExp.rightContext);		//summer       
	alert(RegExp.lastMatch);		//short        最近一次匹配项。
	alert(RegExp.lastParen);		//s            最近一次匹配的捕获组
	alert(RegExp.multiline);		//false        表示是否所有表达式都是用多行模式
}
//可以使用段属性名来代替
if (pattern.test(text)){
	alert(RegExp.$_);			//this has been a short summer 最近一次要匹配的字符串
	alert(RegExp["$`"]);		//this has been a      input字符串中lastmatch之前的文本
	alert(RegExp.["$'"]);		//summer       
	alert(RegExp.["$&"]);		//short        最近一次匹配项。
	alert(RegExp.["$+"]);		//s            最近一次匹配的捕获组
	alert(RegExp.["$*"]);		//false        表示是否所有表达式都是用多行模式
}

var text = "this has been a short summer";
var pattern = /(...)or(.)/g;
if (pattern.test(text)){
	alert(RegExp.$1);		//sh
	alert(RegExp.$2);		//t
}