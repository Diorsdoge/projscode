//3.3 变量
function test() {
	message1 = "hi";     //不加var，全局变量
	var message2 = "no hi";   //加var，局部变量
}
test():
alert(message1);    //没问题
alert(message2);    //错误