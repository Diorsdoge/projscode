//8.2 location对象
function getQueryStringArgs() {
	//取得查询字符串并去掉开头的问号
	var qs = (location.search.length > 0 ? location.search.subString(1) : ""),
	//保存数据的对象
	args = {},
	//取得每一项
	items = qs.length ? qs.split("&") : [],  
	item = null,
	name = null,
	value = null,
	//在for循环中使用
	i = 0;
	len = items.length;
	//逐个将每一项添加到args对象中
	for ( i = 0; i < len; i++){
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if(name.length) {
			args[name] = value;
		}
	}
	return args;
}

//假设查询字符串时？q=javascript&num=10
var args = getQueryStringArgs();
alert(args["q"]);		//"javacript"
alert(args["num"]);		//"10"

//8.2.2 位置操作
//使用assign()方法传递一个url
location.assign("http://baidu.com");

window.location = "http://baidu.com";
location.href = "http://baidu.com";

//假设初始url为 http://baidu.com/wiletcda/
//将url修改为"http://baidu.com/wiletcda/#section1"
location.hash = "#section1";
//将url修改为"http://baidu.com/wiletcda/?q=javascript"
location.search = "?q=javascript";
//将url修改为"http://yahoo.com/wileycda/"
location.hostname = "yahoo.com"
//将url修改为"http://yahoo.com/mydir/"
location.pathname = "mydir";
//将url修改为"http://yahoo.com:8080/wileycda/"
location.port = 8080;
//每次修改location的属性(hash除外)，页面都会以新的url重新加载

<!DOCTYPE html>
<html>
<head>
	<title>You won't ne able to get back here</title>
</head>
	<body>
	<p>Enjoy this page for a second, because you won't be coming back here.</p>
	<script type="text/javascript">
	setTimeout(function(){
		location.replace("http://baidu.com/");
	}, 1000);
	</script>
	</body>
</html>

location.reload();		//重新加载(有可能从缓存中加载)
location.reload(true);	//重新加载(从服务器重新加载)