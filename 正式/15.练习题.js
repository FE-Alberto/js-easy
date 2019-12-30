console.log(a);
var a = 12;

function fn() {
    console.log(a);
    var a = 13
}
fn();
console.log(a);



console.log(a);
var a = 12;

function fn() {
    console.log(a);
    a = 13;
}
fn();
console.log(a);



console.log(a);
a = 12;

function fn() {
    console.log(a);
    a = 13;
}
fn();
console.log(a);

var foo = 1;

function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);
}
bar();



var n = 0;

function a() {
    var n = 10; // 11
    function b() {
        n++;
        console.log(n); // 10
    }
    b();
    return b();
}
var c = a();
c
console.log(n);

var a = 10,
    b = 11,
    c = 12;
// 形参赋值是是私有不会向上查找
function test(a) {
    a = 1;
    var b = 2;
    c = 3;
}
test(10);
console.log(a);
console.log(b);
console.log(c);

if (!("a" in window)) {
    var a = 12
}
console.log(a);


var a = 4;

function b(x, y, a) {
    console.log(a); // 3
    arguments[2] = 10;
    console.log(a); // 10
}
a = b(1, 2, 3)
console.log(a); //4


var foo = 'hello';
(function (foo) {
    console.log(foo);
    var foo = foo || 'world';
    console.log(foo);
})(foo);



var a = 9;

function fn() {
    a = 0;
    return function (b) {
        return b + a++;
    }
}
var f = fn();
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);


var ary = [1, 2, 3, 4]

function fn(ary) {
    ary[0] = 0;
    ary = [0];
    ary[0] = 100;
    return ary;
}
var res = fn(ary);
console.log(ary);
console.log(res);



function fn(i) {
    return function (n) {
        // 不管有没有小括号 都写赋值后计算
        console.log(n + (i++));
    }
}
var f = fn(10);
f(20);
fn(20)(40);
fn(30)(50);
f(30);

function fn() {
    this.a = 0;
    this.b = function () {
        alert(this.a)
    }
}

fn.prototype = {
    b: function () {
        this.a = 20;
        alert(this.a)
    },
    c: function () {
        this.a = 30;
        alert(this.a)
    }
}
var my_fun = new fn();
my_fun.b()
my_fun.c();





function Fn() {
    var n = 10;
    this.m = 20;
    this.aa = function () {
        console.log(this.m);
    }
}
var f1 = new Fn;
Fn.prototype.bb = function () {
    console.log(this.n);
    var f1 = new Fn;
    Fn.prototype = {
        aa: function () {
            console.log(this.m + 10);

        }
    }
}
var f2 = new Fn;
console.log(f1.constructor); // FN 
console.log(f2.constructor); // Object

f1.bb() // undefined
f1.aa() // 20
f2.bb() // undefined
f2.aa() // 20
f2.__proto__.aa(); // NaN

// 函数也是对象
// 函数有三中角色

// 1.普通角色
// 堆栈内存释放
// 作用域链
// 2.类
// prototype 原型
// __proto__ 原型链
// 实例
// 3.普通对象
// 就是堆键值对的增删改查

function Foo() {
    getName = function () {
        console.log(1);
    }
    return this;
}
Foo.getName = function () {
    console.log(2);
}
Foo.prototype.getName = function () {
    console.log(3);
}
var getName = function () {
    console.log(4);
}

function getName() {
    console.log(5);
}

Foo.getName(); // 2 把Foo当做一个对象，找Foo的私有方法
getName(); // 4 变量提升重新赋值
Foo().getName(); 
getName();
new Foo()