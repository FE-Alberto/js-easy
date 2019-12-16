// 什么是变量提升
// 当栈内存 js代码子上而下执行之前，浏览器首先会把
// 带 var function 关键字的进行提前 声明 或者 定义；
// 这种预先处理机制成为变量提升。
// 变量提升（declare）：var a / function sum （默认值是undefined）
// 声明：declare var a; (默认值是undefined)
// 定义 defined  a = 12; （定义其实就是赋值操作）

// 带 var 的只声明未定义
// 带 function 的声明和赋值都完成了


// 变量提升只发生在当前作用域

console.log(a); // undefined
var a = 12;
var b = a;
b =13;
console.log(a);
console.log(b);

// 当代码执行 遇到创建函数 直接跳过即可
// 因为在提升阶段就完成了赋值操作了
// 在es3 语法规范中只有全局作用域和函数执行私有作用域，其他大括号不会形成栈内存。
console.log(a);
var a = 12;

// 带 var 和不带var 的区别

// 在全局作用域下声明一个变量，
// 也相当于给window全局对象设置了一个属性。

// 私有作用域中声明的私有变量和 window 没啥关系

// 全局变量和 window 存在映射关系。

// in 操作 检测属性 是否存在 obj;


undefined, 12
12, undefined,
13 13

12 12;












