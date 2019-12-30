// js 中万物皆对象
// 对象是一个容器，封装了 属性 property 和 方法 method
// 属性是对象的状态，方法是对象的行为。


// 构造函数
// 构造函数名字的第一个字母通常大写。

// 面向对象编程的第一步就是生成对象。
// 通常需要一个模板，表示某一类实物的共同特征，然后对象根据这个模板生成。

// 类 class 就是对象的模板，对象就是 ‘类’ 的实例
// 但是 js 对象，不是基于类 而是通过 构造函数 constructor 和 原型链 prototype 

// 构造函数的特点
// 函数体内部使用 this 关键字，代表所要生成的对象实例。
// 生成对象的时候，必须使用 new 命令。

// new 命令
// new 的作用就是执行构造函数，返回一个实例对象。

var Vehicle = function () {
    this.price = 1000;
}
const v = new Vehicle();
console.log(v.price);

// 使用 new 命令时，根据需要，构造函数也可接收参数，

var Vehicle = function(price){
    this.price = price;
}
// 注意：new 本身就可以执行构造函数，后面的 Vehicle 可以带括号也可以不带括号 
// 推荐带括号 区分
const v = new Vehicle(300);
console.log(v.price);

// 如果 忘记使用 new 构造函数就变成了 普通函数
var Vehicle = function(price){
    'use strict';
    this.price = price;
}
const v = Vehicle(300);
console.log(v.price);
// new 命令原理

// 创建一个空对象，作为将要返回的对象实例。
// 将这个空对象的原型，指向构造函数的prototype属性。
// 将这个空对象赋值给函数内部的this关键字。
// 开始执行构造函数内部的代码。

// 如果构造函数内部有return语句，而且return后面跟着一个对象，
// new命令会返回 return 语句指定的对象，否则，就不会管 return 语句 都返回 this 对象

var Vehicle = function () {
    this.price = 1000;
    return {
        "price":1
    };
}
var v = new Vehicle();
console.log(v.price);

// new.target 函数内部可以使用 new.target 属性。
// 如果当前函数是 new 命令调用 new.target 指向当前函数，否则为 undefined；

function f() {
    console.log(new.target === f);
}
f()
new f();

// Object.create() 创建实例对象
// 构造函数作为模板，可以生成实例对象。但是，有时拿不到构造函数，只能拿到一个现有的对象。我们希望以这个现有的对象作为模板，生成新的实例对象，这时就可以使用Object.create()方法。

var person1 = {
    name:"张三",
    age:32,
    greeting:function(){
        console.log(`hi! my name ${this.name}`);
    }
}
var person2 = Object.create(person1);
person2.name;
person2.greeting();