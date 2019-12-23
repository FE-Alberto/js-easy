// 带 var 和 function 关键字的相同名字 这种也算重名

var fn = 12;
function fn() {
    
}
console.log(fn,fn);
// 关于重名的处理，如果名字重复了，不会重新声明，但是会重新的定义。
// 不管是变量提升还是代码执行阶段都是如此

console.log(fn());
function fn() {
    console.log(1);
}
console.log(fn());
function fn() {
    console.log(2);
}
console.log(fn());
function fn() {
    console.log(3);
}
var fn = 100;
fn();
console.log(fn());
function fn() {
    console.log(4);
}