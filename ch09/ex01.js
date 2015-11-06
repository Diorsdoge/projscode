//第9章 客户端检测
//9.1 能力检测
if (object.propertyInQuestion) {
	//使用object.propertyInQsestion
}	

function getElement(id){
	if (document.getElementById){
		return document.getElementById(id);
	} else if (document.all) {
		return document.all(id);
	} else {
		throw new Error("No wat to retrieve element!");
	}
}

function getWindowWidth(){
	if (document.all){	//假设是ie
		return document.documentElement.clientWidth; //错误的用法
	} else {
		return window.innerWidth();
	}
}

//9.1.1 更可靠的能力检测
//不要这样做！这不是能力检测——只检测了是否存在相应的方法
function isSortable(object){
	return !!object.sort;
}

var result = isSortable({ sort: true });

//这样做更好：检测sort是不是函数
function isSortable(object){
	return typeof object.sort == "function";
}

//在ie8及之前版本中不行
function hasCreateRlement(){
	return typeof document.createElement == "function";
}

//在ie中会导致错误
var xhr = new ActiveXObject("Microsoft.XMLHttp");
if (xhr.open){//这里会发生错误
	//执行操作
}

//作者：Peter Michaux
function isHostMethod(object, property) {
	var t = typeof object[property];
	return t == 'function' ||
			(!!(t == 'object' && object[property])) ||
			t == 'unkown';
}

result = isHostMethod(xhr, "open");		//true
result = isHostMethod(xhr, "foo");		//false

//能力检测，不是浏览器检测
//错误！还不够具体
var isFirefox = !!(navigator.vendor && navigator.vendorSub);
//错误假设过头了
var isIE = !!(document.all && document.uniqueID);

//确定浏览器是否支持Netscape风格的插件
var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);
//确定浏览器是否具有DOM1级规定的能力
var hasDOM1 = !!(document.getElementById && document.createElement && document.getElementByTagName);