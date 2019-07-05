console.log("my first demo!");
var a = 9;
a++;
console.log(a);

//计算时长
console.time('123');
for(var i=0;i<10000;i++){
    a+=9;
}
console.timeEnd('123');
var count = 8;
console.log('count:',count);

//导出模块某个对象
let math = {
    add:function (a,b) {
        return a+b;
    }
}
module.exports = math;

var stringWidth = require("string-width");
var num = stringWidth("hahahah");
console.log(num);
