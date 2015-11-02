//7.3 模仿块级作用域
function outputNumbers(count){
	for (var i = 0; i < count; i++){
		alert(i);
	}
	alert(i);	//计数
}

function outputNumbers(count){
	for (var i = 0; i < count; i++){
		alert(i);
	}
	var i;		//重新声明变量
	alert(i);	//计数
}

function outputNumbers(count){
	(function(){
		for (var i = 0; i < count; i++){
			alert(i);
		}
	}){};
	alert(i);		//导致一个错误
}

(function(){
	var now = new Date();
	if(now.getMonth() == 0 && now.getDate() == 1){
		alert("Happy new year!");
	}
}();