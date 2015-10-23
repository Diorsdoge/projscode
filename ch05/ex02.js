//5.2 Array 类型

var colors = new Array();
//下面代码将创建length为20的数组
var colors = new Array(20);
//创建一个包含三个字符串儿的数组
var colors = new Array("red","blue","green");
//创建数组第二种基本方式是使用数组字面量表示法
var colors = ["red", "blue", "green"];  //创建一个包含3个字符串的数组
var names = [];    //创建一个空数组
var values = [1,2,];  //不要这样！会创建包含2或3项的数组
var options = [,,,,,,];   //不要这样！这样会创建一个包含5或6项的数组
  
var colors = ["red", "blue", "green"];   //define an Array
alert(colors[0]);           //show firt
colors[2] = "black";		//change second
colors[3] = "brown";		//add fourth

var colors = ["red", "blue", "green"];    //船舰一个包含3个字符串的数组
var names = [];    //创建一个空数组

alert(colors.length);    //3
alert(names.length);      //0

var colors = ["red", "blue", "green"];
colors.length = 2;
alert(colors[2]);      //undefined

var colors = ["red", "blue", "green"];
colors[colors.length] = "black";      //添加一种颜色
colors[colors.length] = "brown";		//再添加一种颜色

var colors = ["red", "blue", "green"];
colors[99] = "black";     //(在99)添加一种颜色
alert(colors.length);     //100

//5.2.1 检测数组

if (value instanceof Array) {
	//对数组执行某些操作
}
//instanceof执行单一的全局执行环境，Array.isArray()解决这个问题
if (Array.isArray(value)) {
	//对数组进行某些操作
}

//5.2.2 转换方法
var colors = ["red", "blue", "green"];
alert(colors.toString());    //red,blue,green
alert(colors.valueOf());     //red,blue,green
alert(colors);     //red,blue,string


var colors = ["red", "green", "blue"];
alert(colors.join(","));    //red,green,blue
alert(colors.join("||"));    //red||green||blue

var colors = new Array();     //创建一个数组
var count = colors.push("red", "green");   //推入两项
alert(count);    //2
count = colors.push("black");
alert(count);   //3
var item = colors.pop();
alert(item);    //"back"
alert(colors.length);   //2

var colors = ["red", "blue"];
colors.push("brown");   //添加一项
colors[3] = "black";    //再添加一项
alert(colors.length);   //4
var item = colors.pop();
alert(item);   //"black"

//5.2.4队列方法
var colors = new Array();				  //创建一个数组
var count = colors.push("red", "green");  //推入两项
alert(count);    //2
count = colors.push("black");
alert(count);    //3
var item = colors.shift();   //获取第一项
alert(item);    //"red"
alert(colors.length);  //2

var colors = new Array();
var count = colors.unshift("red","green");
alert(count);    //2
count = colors.unshift("black");
alert(count);   //3
var item = colors.pop();
alert(item);   //"green";
alert(colors.length);    //2

//5.2.5 重排序方法
var values = [1, 2, 3, 4, 5];
values.reverse();
alert(values);      //5,4,3,2,1

var values = [0, 1, 5, 10 ,15];
values.sort(); 	   //字符串比较
alert(values);   //0,1,10,15,5

function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 >value2) {
		return 1;
	} else {
		return 0;
	}
}

var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values);    //0,1,5,10,15

//对于数值类型活着其valueOf()方法会返回数值类型的对象类型，可以使用更简单的比较函数
function compare(value1, value2) {
	return value2 - value1;
}

//5.2.6 操作方法

var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
alert(colors);   //red,green,blue
alert(colors2);   //red,green,blue,yellow,black,brown

var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
alert(colors2); //green,blue,yellow,purple;
alert(colors3); //green,blue,yellow

var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);   //删除第一项
alert(colors);    //green,blue
alert(removed);    //red,返回的数组中只包含一项
removed = colors.splice(1, 0, "yellow", "orange");   //从位置1开始插入两项
alert(colors);      //green,yellow,orange,blue
alert(removed);     //返回的是一个空数组

removed = colors.splice(1, 1, "red", "purple");   //插入两项删除一项
alert(colors);      //green,red,purple,prange,blue
alert(removed);     //yellow,返回的数组中只包含一项

//5.2.7 位置方法
var numbers = [1, 2, 3, 4 ,5 , 4, 3, 2, 1];
alert(numbers.indexOf(4));     //3
alert(numbers.lastIndexOf(4));     //5
alert(numbers.indexOf(4, 4));    //5
alert(numbers.lastIndexOf(4, 4));    //3

var person = { name : "Nicholas" };
var people = [ { name: : "Nicholas" }];
var morePeople = [person];

alert(people.indexOf(person));    //-1
alert(morePeople.indexOf(person));  //0

//5.2.8 迭代方法

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var reveryResult = numbers.every(function(item, index, array){
	return (item > 2);
});
alert(everyResult);   //false
var someResult = numbers.some(function(item, index, array){
	return (item > 2);
});
alert(someResult);   //true

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var filterResult = numbers.filter(function(item, index, array){
	return (item > 2);
});
alert(filterResult);    //[3,4,5,4,3]

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var mapResult = numbers.map(function(item, index, array){
	return item * 2;
});
alert(mapResult);   //[2,4,6,8,10,8,6,4,2]

var numbers = [1,2,3,4,5,4,3,2,1];
numbers.forEach(function(item, index, array){
	//执行某些操作
});


//5.2.9 缩小方法
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
	return prev + cur;
});
alert(sum);  //15

var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
	return prev + cur;
});
alert(sum);  //15
