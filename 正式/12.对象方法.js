// Object.getPrototypeOf 方法返回参数对象的原型，获取原型对象的标准方法。
class F {
    constructor() {
    }
}
var f = new F();
Object.getPrototypeOf(f) === F.prototype;

console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

// 函数的原型是 Function.prototype
function f() { }
Object.getPrototypeOf(f) === Function.prototype;


// Object.setPrototypeOf() 方法为参数对象设置的原型，返回该参数对象，
// 有2个参数 第一个是现有对象，第二个是原型对象。

var a = {}
var b = { x: 1 };
Object.setPrototypeOf(a, b);
console.log(a.x);
// new 命令可以使用 Object.setPrototypeOf 方法模拟;
var F = function () {
    this.too = 'bar';
}
// var f = new F();

var f = Object.setPrototypeOf({}, F.prototype)
F.call(f);
console.log(f.too);

// Object.create() 使用new命令让构造函数返回一个实例。

var A = {
    print: function () {
        console.log('hello');
    }
}
var B = Object.create(A);
B.print()


// Object.prototype.isPrototypeOf()
// 实例对象 isPrototypeOf 方法，用来判断该对象是否为参数对象的原型。
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);
console.log(o2.isPrototypeOf(o3));
console.log(o1.isPrototypeOf(o3));
// Object.prototype.__proto__ 只有浏览器才有这个属性
// 返回该对象的原型。该属性可读写。
var obj = {}
var p = {}
obj.__proto__ = p;
console.log(Object.getPrototypeOf(obj) === p);

var A = {
    name: "张三"
};

var B = {
    name: "李四"
};

var proto = {
    print: function () {
        console.log(this.name);
    }
}

A.__proto__ = proto
B.__proto__ = proto

A.print();
B.print();

//  获取原型对象方法比较

var obj = new Object();

console.log(obj.__proto__ === Object.prototype);
console.log(obj.__proto__ === obj.constructor.prototype);

// 获取实例对象 obj 的原型对象三种方法
obj.__proto__; // 只有浏览器才能支持。
obj.constructor.prototype;  // 在手动改变原型对象时，可能会失效。需要重新定义 constructor 
Object.getPrototypeOf(obj); // 推荐使用

// Object.getOwnPropertyNames() 返回一个数组 参数是对象本身的所有属性键名
Object.getOwnPropertyNames(Date);


// Object.prototype.hasOwnProperty()
// 对象实例的 hasOwnProperty 方法返回一个布尔值，用于判断某个属性定义在对象本身上，还是原型链上。
// 另外，hasOwnProperty 方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。

for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];

    }
}

// 对象的拷贝方法

function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig))
    copyOwnPropertiesFrom(copy, orig);
    return copy
}

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source).forEach(function () {
        let desc = Object.getOwnPropertyDescriptor(source, propkey);
        Object.defineProperty(target, propkey, desc);
    })
    return target;
}

var obj = {
    name: '123',
    age: [12, '123']
}

function copyObject(orig) {
    return Object.create(
        Object.getPrototypeOf(orig),
        Object.getOwnPropertyDescriptor(orig)
    )
}


var obj1 = copyObject(obj);

setTimeout(() => {
    console.log(obj1);
}, 30)


function structuralClone(obj) {
    return new Notification('', { data: obj, silent: true }).data;
}

const obj = {
    name: "123",
    ree: [32, 12, 3, 3]
}
const clone = structuralClone(obj);
console.log(clone);
