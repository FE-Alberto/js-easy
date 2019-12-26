// 当前函数执行，形成一个私有作用域A，A的上级作用域是谁，和他在那执行的没有关系，和它在那定义有关系，在那创建的 它的上级作用域就是谁。

var a = 12;

function fn() {
    console.log(a);
    // 当前函数本身 fn
    console.log(arguments.callee);
    // 当前函数在什么地方执行 全局下是 null
    console.log(arguments.callee.caller);
}

function sum() {
    var a = 120;
    fn()
}
sum();


// 


var n = 10;
function fn() {
    var n = 20;
    function f() {
        n++;
        console.log(n); // 21 
    }
    f();
    return f;
}
var x = fn();
x() // 22
x() // 23
console.log(n); // 10
