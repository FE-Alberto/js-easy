// let 创建的变量不存在变量提升

let a = 12;
console.log(a);
let a = 13
console.log(a);

let a = 10,
    b = 12;
let fn = function () {
    let a = b = 20;
    console.log(a, b);
};
fn();
console.log(a, b);

// 在相同的作用域中，基于let不能声明相同名字的变量
// let 没有变量提升，不能重复声明；有重复就报错

// 虽然没有变量提升机制，但是当前作用域代码自上而下执行之前，

// 浏览器会做一个重复性检查，自上而下查找到当前作用域所有比那里，一旦发现有重复的就爆出异常。

// 暂时性死区 es6解决了暂时性死区的问题。
var a = 12;
if (true) {
    console.log(a);
    let a = 21;
}

console.log(typeof a);
var a;
