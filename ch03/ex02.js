var message1 = "some string";
alert(typeof(message1)); // "string"
alert(typeof message1);  // "string"
alert(typeof 95);   //"number"

var message2;
alert(message2 == undefined);  // true

var car = null;
alert(typeof car);  //"object"

alert(null == undefined);   //true