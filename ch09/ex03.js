//9.3 用户代理检测
//9.3.2 用户代理字符串检测技术
//1. 识别呈现引擎
var client = function(){
	var engine = {
		ie: 0,
		gecko: 0,
		webkit: 0,
		khtml: 0,
		opera: 0,
		//具体版本号
		ver: null
	};
	//在此检测呈现引擎、平台和设备
	return {
		engine : engine
	};
}();

if (client.engine.ie) {//如果是ie，client.ie 的值应该大于0
	//针对ie的代码
} else if (client.engine.gecko > 1.5){
	if (client.engine.ver == "1.8.1"){
		//针对这个版本执行某些操作
	}
}

if (window.opera){
	engine.ver = window.opera.version();
	engine.opera = parseFloat(engine.ver);
}

var ua = navigator.userAgent;
if (window.opera) {
	engine.ver = window.opera.version();
	engine.opera = parseFloat(engine.ver);
} else if (/AppleWebkit\/(\s+)/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.webkit = parseFloat(engine.ver);
}

var ua = navigator.userAgent;
if (window.opera) {
	engine.ver = window.opera.version();
	engine.opera = parseFloat(engine.ver);
} else if (/AppleWebkit\/(s+)/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.webkit = parseFloat(engine.ver);
} else if (/KHTML\/(s+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.khtml = parseFloat(engine.ver);
}

var ua = navigator.userAgent;
if (window.opera) {
	engine.ver = window.opera.version();
	engine.opera = parseFloat(engine.ver);
} else if (/AppleWebkit\/(s+)/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.webkit = parseFloat(engine.ver);
} else if (/KHTML\/(s+)/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.khtml = parseFloat(engine.ver);
} else if (/rv:([^\)]+)\) Gecko\/\d{0}/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.gecko = parseFloat(engine.ver);
}

var ua = navigator.userAgent;
if (window.opera) {
	engine.ver = window.opera.version();
	engine.opera = parseFloat(engine.ver);
} else if (/AppleWebkit\/(s+)/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.webkit = parseFloat(engine.ver);
} else if (/KHTML\/(s+)/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.khtml = parseFloat(engine.ver);
} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.gecko = parseFloat(engine.ver);
} else if (/MSIE ([^;]+)/.test(ua)){
	engine.ver = RegExp["$1"];
	engine.ie = parseFloat(engine.ver);
}
//2.识别浏览器
var client = function(){
	var engine = {
		//呈现引擎
		ie: 0,
		gecko: 0,
		webkit: 0,
		khtml: 0,
		opera: 0,
		//具体版本
		ver: null
	};
	var browser = {
		//浏览器
		ie: 0;
		firefox: 0,
		safari: 0,
		konq: 0,
		opera: 0,
		chrome: 0,
		//具体版本
		ver: null
	};
	//在此检测呈现引擎、平台和设备
	return {
		engine: engine,
		browser: browser
	};
}();

//检测呈现引擎及浏览器
var ua = navigator.userAgent;
if (window.opera){
	engine.ver = browser.ver = window.opera.version();
	engine.opera = browser.opera = parseFloat(engine.ver);
} else if(/AppleWebkit\/(s+)/.test(ua)){
	engine.ver = RegExp["$1"];
	browser.chrome = parseFloat(engine.ver);
	//确定是Chrome还是Safari
	if (/Chrome\/(s+)/.test(ua)){
		browser.ver = RegExp["$1"];
		browser.chrome = parseFloat(browser.ver); 
	} else if (/Version\/(\S+)/.test(ua)){
		browser.ver = RegExp["$1"];
		browser.safari = parseFloat(browser.ver);
	} else {
		//近似地确定版本号
		var safariVersion = 1;
		if (engine.webkit < 100){
			safariVersion = 1;
		} else if (engine.webkit < 312){
		safariVersion = 1.2;
		} else if (engine.webkit < 412){
		safariVersion = 1.3;
		} else {
			safariVersion = 2;
		}
		browser.safari = browser.ver = safariVersion;
	} else if (/KHTML\/(\s+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
		engine.ver = browser.ver = RegExp["$1"];
		engine.khtml = browser.konq = parseFloat(engine.ver);
	} else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
		engine.ver = RegExp["$1"];
		engine.gecko = parseFloat(engine.ver);
	//确定是不是Firefox
		if (/Firefox\/(\S+)/.test(ua)){
			browser.ver = RegExp["$1"];
			browser.firefox = parseFloat(browser.ver);
		}
	} else if (/MSIE ([^;]+)/.test(ua)){
		engine.ver = RegExp["$1"];
		engine.ie = browser.ie = parseFloat(engine.var);
	}
}

//这一章代码我觉得敲起来毫无意义，以后有机会再添加吧