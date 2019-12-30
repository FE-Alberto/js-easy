// 原型链继承

// 构造函数的缺点

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.meow = function () {
    console.log('猫喵');
}
var cat1 = new Cat('大白', '白色')
var cat2 = new Cat('23', '白色')
console.log(cat2.name);
console.log(cat1.name);
// 为了解决 构造函数中无法公用同一个方法的时候，就通过 原型对象的 prototype 属性;
console.log(cat1.meow === cat2.meow);

// prototype 属性的作用 在js中每一个函数都有一个 prototype属性 这个prototype 指向一个对象。
function f() { }
console.log(typeof f.prototype);

// 对于普通函数来说 该属性无用 但是对构造函数来说，生成实例的时候，该属性会自动生成为实例对象的原型。

function Animal(name) {
    this.name = name;
}
Animal.prototype.color = 'white';
// 实例对象 都没有 color 属性，都是读取原型对象的color属性，
// 当实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法。


var cat1 = new Animal("大猫")
cat1.color = 'black'
// 实例对象 cat1 的属性修改后，就不在去读取原型对象上的color属性。
var cat2 = new Animal("二猫")
console.log(cat1.color);
console.log(cat1.color === cat2.color);

// 原型对象的作用，就是定义所有实例对象共享的属性和方法。
// 实例就是从原型衍生出来的子对象。

Animal.prototype.walk = function () {
    return this.name + "is walking"
}
console.log(cat1.walk());


// 原型链
// 所有对象都有自己的原型对象 prototype
// 原型对象也有自己的原型 因此就会形成一个原型链
// 原型链的尽头 就是 null
console.log(Object.getPrototypeOf(Object.prototype));
// 如果对象的自身和它原型 都定义了一个相同的属性名，
// 那么优先读取对象自身的属性，‘叫做覆盖’
function Cat() {
    this.name = "xiaoming"
}
Cat.prototype.name = '213'
var cat1 = new Cat();
console.log(cat1.name);


var MyArray = function () {

}
// prototype 对象 有一个 constructor 属性 默认指向 prototype 对象所在的构造函数;
MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

var mine = new MyArray();
mine.push(1, 23, 5)
console.log(mine, mine.length);

// 由于 constructor 属性定义在 prototype 对象上面，意味着可以被所有实例对象继承。

function P() { };
var p = new p();
// p 是构造函数的大P的实例对象，但是p 自身没有 constructor 属性，该属性其实是读取原型链上面大 P.prototype.constructor 属性。

p.constructor === P;
p.constructor === P.prototype.constructor;
p.hasOwnProperty('constructor')

// constructor 的属性的作用是，可以得知某个实例对象，到底是哪一个构造函函数产生的。

function Fn() {
    this.name = 'hello'
}
Fn.prototype.createCopy = function () {
    return new this.constructor();
}

var f = new Fn();
f.constructor == Fn
f.constructor === RegExp;

// 有了 constrouctor 属性，就可以从一个实例对象中新建另一个实例。

var x = new f.constructor();
console.log(x instanceof Fn);
console.log(x.name);
var z = x.createCopy()
console.log(z.prototype);

// constructor 属性表示原型对象余构造函数之间的关联关系，
// 如果修改了原型对象，一般会同时修改 constructor 属性


function Person(name) {
    this.name = name;
}
Person.prototype.method = function () {

}
console.log(Person.prototype.constructor === Person);
console.log(Person.prototype.constructor === Object);

//  上面代码中，要么将 constructor 属性重新指向原来的构造函数，要么只在原型对象上添加方法，这样可以保证 instanceof 运算符不会失效。

// 如果不确定 constructor 属性指向那个函数 可以通过 name 属性，从实例得到构造函数的名称；

function Foo() {
}
var f = new Foo();
console.log(f.constructor.name);


// instanceof 运算符 返回一个布尔值，表示对象是否为某个构造函数的实例

function NewCat() {
    this.name = 'name';
}
var cat = new NewCat();
cat.name = 'hhh'
console.log(cat instanceof NewCat);
// instanceof 和 isPrototypeOf 相同
console.log(NewCat.prototype.isPrototypeOf(cat));

// instanceof 检查整改原型链，因此同一个实例对象，可能会对多个构造函数都返回 true

// instanceof 还可以判断值的类型 只限于 实例对象
var x = [1, 2, 3];
var y = {};
console.log(x instanceof Array);
console.log(y instanceof Object);

function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
}
function Rectangle() {
    Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;


var rect = new Rectangle();
console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);

// 多重继承
// js不提供多重继承功能，不容许一个对象同时继承多个对象，

function M1() {
    this.hello = 'hello';
}

function M2() {
    this.world = 'world';
}

function S() {
    M1.call(this);
    M2.call(this);
}

S.prototype = Object.create(M1.prototype);
Object.assign(S.prototype, M2.prototype);

S.prototype.constructor = S;

var s = new S();
console.log(s.hello);
console.log(s.world);

(function ($, window, document) {
    function go() {

    }

    function handleEvents() {

    }

    function initalize() {

    }

    function dieCarouseDie() {

    }

    window.finalCarousel = {
        init: initalize,
        destory: dieCarouseDie
    }
})(JQuery, window, document)













