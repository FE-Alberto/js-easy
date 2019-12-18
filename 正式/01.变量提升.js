// 什么是变量提升
// 当栈内存 js代码子上而下执行之前，浏览器首先会把
// 带 var function 关键字的进行提前 声明 或者 定义；
// 这种预先处理机制成为变量提升。
// 变量提升（declare）：var a / function sum （默认值是undefined）
// 声明：declare var a; (默认值是undefined)
// 定义 defined  a = 12; （定义其实就是赋值操作）

// 带 var 的只声明未定义
// 带 function 的声明和赋值都完成了U


// 变量提升只发生在当前作用域

console.log(a); // undefined
var a = 12;
var b = a;
b = 13;
console.log(a);
console.log(b);

// 当代码执行 遇到创建函数 直接跳过即可
// 因为在提升阶段就完成了赋值操作了
// 在es3 语法规范中只有全局作用域和函数执行私有作用域，其他大括号不会形成栈内存。
console.log(a);
var a = 12;

// 带 var 和不带 var 的区别

// 在全局作用域下声明一个变量，
// 也相当于给 window 全局对象设置了一个属性。

// 私有作用域中声明的私有变量和 window 没啥关系

// 全局变量和 window 存在映射关系。

// in 操作 检测属性 是否真的存在;

console.log(a, b); // undefiend undefiend

var a = 12,
    b = 12;

function fn() {
    console.log(a, b);  // undefiend 12
    var a = b = 13;
    console.log(a, b); // 13 13
}
fn();
console.log(a, b); // 12 13

// 私有作用域中带var 和不带的有区别
// 带 var 是私有作用域变量提升阶段，都声明为私有变量，和外界没有任何关系
// 不带 var 不是私有变量 就向上级作用查找 只到找到 window 为止

