//9.2 怪癖检测
var hasDontEmunQuirk = function() {
	var o = { toString : function(){
	}};
	for (var prop in o){
		if (prop == "toString"){
			return false;
		}
	}
	return true;
}();

var HasEnumShoadowsQuirk = function(){
	var o = { toString : function(){}};
	var count = 0;
	for (var prop int o){
		if (prop == "toString"){
			count++;
		}
	}
	return (count > 1);
}();