//5 引用类型
//5.1 Object类型
var person = new Object();
person.name = "Nicholas";
person.age = 29;

var person = {
	name: "Nicholas",
	age: 29
};

var person = {
	name: "Nicholas",
	age: 29,
	5 : true  //数值自动转为字符串
};

var person = {};
person.name = "Nicholas";
person.age = 29;

function displayInfo(args) {
	var output = "";

	if (typeof args.name == "string") {
		output += "Name: " + args.name + "\n";
	}

	if (typeof args.age == "number") {
		output += "Age: " + args.age + "\n";
	}

	alert(output);
}
displayInfo({
	name: "Nicholas",
	age: 29
});
displayInfo({
	name: "Greg"
});

alert(person["name"]);  //"Nicholas"
alert(person.name);  //"Nicholas"
