// 当前函数执行，形成一个私有作用域A，A的上级作用域是谁，和他在那执行的没有关系，和它在那定义有关系，在那创建的 它的上级作用域就是谁。

var a = 12;

function fn() {
    console.log(a);
    // 当前函数本身 fn
    console.log(arguments.callee);
    // 当前函数在什么地方执行
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
        console.log(n);
    }
    f();
    return f;

}
var x = fn();
x()
x()
console.log(n);



var i = 1;

function fn(i) {
    return function (n) {
        console.log(n + (++i));
    }
}

var f = fn(2);
f(3) // 6
fn(5)(6); // 12
fn(7)(8) // 16
f(4) // 8

