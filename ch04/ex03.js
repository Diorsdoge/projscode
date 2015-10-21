//4.3 垃圾收集
//4.3.1 引用计数

function problem() {
	var objectA = new Object();
	var objectB = new Object();

	objectA.someOtherObject = objectB;
	objectB.anotherObject = objectA;
}

var element = document.getElementById("some_element");
var myObject = new Object();
myObject.element = element;
element.someObject = myObject;

//4.3.4 管理内存 
function createPerson(name) {
	var localPerson = new Object();
	localPerson.name = name;
	return localPerson;
}
var globalPerson = createPerson("Nicholas");
//手工解除globalPerson的引用
globalPerson = null;