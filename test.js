/*var a = 99;            // 全局变量a
f();                   // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。
console.log(a);        // a=>99,  此时是全局变量的a
function f() {
    console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined
    var a = 10;
    console.log(a);      // a => 10
}*/
{
    var a = 9;
}
console.log(a); //a=9

/*
{
    let b = 8;
}
console.log(b); //undefined
*/

//let变量可以申明块作用域的变量
/*for(let i=0;i<10;i++){
    a++;
    console.log(a);
}*/

//引用new.js文件中export的对象
var sum = require('./new.js');
console.log(sum.add(3,4));


var stringWidth = require("string-width");
var num = stringWidth("hahahha我是谁");
console.log("长度为："+num);