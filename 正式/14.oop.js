// js 面向对象变量
//  类：对象具体的细分
//  实例：类中具体的一个事务

//  基于构造函数创建自定义类 constructor
//  在普通函数执行的基础上 使用 new 就是 构造函数 当前函数就是 类，
//  返回结果 就是 当前类的一个实例。
//  构造函数创建的类 首字母大写
//  构造函数设计模型主要用于 组件类库的封装。
// 构造函数中的 this 是 当前对象本身
function Fn() {
    console.log(this);
    // 构造函数中 return 如果是 对象返回 return 
    return {
        name: "hhaha"
    }

}
// f 是 Fn 的一个实例
var f = new Fn(); // 再构造函数执行的时候,如果Fn不需要传递实参，我们可以省略小括号但是不推荐
console.log(f);

// instanceof 检测是某个对象的实例

// in 检测当前对象是否存在某个属性

// hasOwnProperty: 检测当前属性是否为对象的某个私有属性

function hasPubProperty(obj, attr) {
    if (obj.hasOwnProperty(attr) || attr in obj) {
        return console.log(true);
     } else {   
         return console.log(false);
     }
   
}
let objNum = {
    'm': 123,
}

hasPubProperty(objNum,'m')
hasPubProperty(objNum,'f')
hasPubProperty(objNum,'toString')


// 原型和原型链 prototype 和 __proto__

// 普通函数 类 所有的类 内置类，自己创建的类

// 普通对象 数组 正则 Math arguments
// 实例是对象类型的 除了基本类型字面量创建的函数
// protyotype的值也是对象类型的
// 函数也是对象类型的

// 1. 所有函数天生自带 prototype 属性这个属性的指向的是一个对象，
//  浏览器会默认给他开辟一个堆内存。
// 2. 在浏览器给 prototype 开辟堆内存有一个天生自带的属性，
// constructor 存的是当前 构造函数本身
// 3. 每一个对象都一个__proto__属性，指向当前实例所属的类的原型 prototype，（如果不确定是哪个的实例都是object的实例）
// 如果__proto__找所属类的prototype，如果找到就用这个共有的，如果没找到就继续向上查找__proto__继续向上查找，一直找到 object.prototype的原型为null




function Fn() {
    var n = 100;
    this.AA = function() {
        console.log('AA[私有]');
    }
    this.BB = function() {
        console.log('BB[私有]');    
    }
}
Fn.prototype.AA = function() {
    console.log('AA[公]');
}
var f1 = new Fn;
var f2 = new Fn;

console.log(f1.AA()); 
