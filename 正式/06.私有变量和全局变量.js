// var a b c
// fn = xxx;

var a = 12,
    b = 13,
    c = 14;

function fn(a) {
    // 函数中第一件事 是 形参赋值 其次是变量提升
    // 形参赋值 a = 12;
    // 变量提升 var b
    // 在私有作用域中，声明过的变量或者function 和形参是私有变量
    // 剩下的都不是自己的通过作用域链向上查找

    console.log(a, b, c); // 12 undefined 14
    var b = c = a = 20;
    console.log(a, b, c); // 20 20 20
}
fn(a);
console.log(a, b, c); // 12, 13, 20


var ary = [12, 23];

function fn(ary) {
    console.log(ary); // 12 23
    ary[0] = 100; // 100 23
    var ary = [100]; // 100
    ary[0] = 0; // 0
    console.log(ary); // 0
}
fn(ary);
console.log(ary); // 100 23


var a = 10,
    b = 10;

function fn(a) {
    // /!*
    //  * 形参赋值：a=10
    //  * 变量提升：var b;
    //  *!/
    //console.log(a, b, c);//=>Uncaught ReferenceError: c is not defined
    a *= 2; //=>a=20
    var b = a; //=>b=20
    b++; //=>b=21
    c = b; //=>给全局作用域中设置一个C
    console.log(a, b, c); //=>20/21/21
    // 想要知道函数的返回值，只需要看函数中是否有RETURN，有的话，RETURN是啥返回结果就是啥，没有默认返回UNDEFINED  a=undefined
}
a = fn(a);
console.log(a, b, c);