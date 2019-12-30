// 属性的简洁表示法

function f(x, y) {
    return { x, y }
}
// 等同于
function f(x, y) {
    return { x: x, y: y }
}

// 方法简写

var o = {
    method() {
        return '2!';
    }
}
// 等于
var o = {
    method: function () {
        return 'hello!';
    }
}

var Person = {
    name: "张三",
    brith,
    hello() {
        console.log("我的名字", this.name);
    }
}

function getPoint() {
    var x = 1;
    var y = 10;
    return { x, y }
}
getPoint()


// 对象的属性名表达式

obj.foo = true;

obj['a' + 'bc'] = 123;


// es6允许字面量定义对象
let proKey = 'foo';
let obj = {
    [proKey]: true,
    ['a' + 'bc']: 123
}
console.log(obj);




// Object.assign() 方法用来将源对象的所有枚举属性。
var target = { a: 1 }
var source1 = { b: 2 }
var source2 = { c: 3 }

var res = Object.assign(target, source1, source2)
console.log(res);

// assgin 为对象添加属性
class Point {
    constructor(x, y) {
        Object.assign(this, { x, y })
    }
}
// 为对象添加方法

Object.assign(SomeClass.prototype,{
    someMethod(arg1,arg2){

    },
    anotherMethod(){

    }
})
// 克隆对象
function cloneObj(origin) {
    return Object.assign({}, origin);
}

// 为属性指定默认值

const DEFAULTS = {
    logLevel:0,
    outputFormat:"html"
},

// 为属性添加默认值
function processContent(options) {
    let options = Object.assign({}, DEFAULTS, options)
}

// Object.setPrototypeOf() 方法设置对象的原型的作用与 proto 相同，

Object.setPrototypeOf(object, prototype)
var o = Object.setPrototypeOf({}, null);

// Object.getPrototypeOf() 读取一个对象的prototype对象；

Object.getPrototypeOf(obj);


// Symbol 原始数据类型
let Symbol1 = Symbol();
console.log(typeof Symbol1);

// 接可以接收一个字符串 表示 symbol 实例的名称。
let sym = Symbol('test');
console.log(sym.name);

// symbol 类型可以转为字符串。

String(sym)


// Proxy 用于修改某些操作的默认行为，等统御在语言层做出修改，所以属与一种”源编程“，即对编程语言进行编程。

