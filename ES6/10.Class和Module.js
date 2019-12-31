// es5通过构造函数，定义并生成一个新对象。下面是一个例子。

function Ponit(x, y) {
    this.x = x;
    this.y = y;
}
Ponit.prototype.toString = function () {
    return '(' + this.x + ',' + this.y + ')'
}
// ES6引入Class 类的概念。作为对象的模板。
// 通过class关键字，可以定义类。

class Ponit {
    // 构造函数 this关键字代表实例对象。
    // 这个类除了构造方法，还定义了一个 toString 方法。
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ')'
    }
}
// 类可以通过 extends 关键字，实现继承。
// super() 关键字，它指代父类同名的方法。
class ColorPoint extends Ponit {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color + " " + super();
    }
}

// 类和模块 的默认就是严格模式，所以不需要使用 use strict 运行



// Modelue 的基本用法
// 模块加载方案，主要的有 CommonJS 和 AMD 俩种规范

// Common.js 模块就是对象，输入时必须查找对象属性。
let { stat, exists, readFile } = require("fs");
// ES6 模块不是对象，而是通过export 命令显式指定输的代码，输入时也采用静态命令的形式。
import { stat, exists, readFile } from 'fs';
// 所以 ES6 可以在编译时完成模块编译，效率要比 Common.js 模块高。


// export 命令，import命令。
// export命令用于用户自定义模块，跪地对外接口，
// import 命令用于输入其他模块的功能，同时创造命名空间，防止函数名冲突。

var firstName = "Michael";
var lastName = "Jackson";
var year = 1958;
export { firstName, lastName, year }

// 其他 JS 文件引用就可以通过 import 命令加载这个模块；

// as 关键字， 如果想对输入的变量重新取一个名字，可以使用as 关键字。
import { lastName as UserName } from './profile';


// 模块整体输入，module命令
// export 命令除了输出变量，还可以输出方法或者Class。
export function area(radius) {
    return Math.PI * radius * radius;
}

export function circumference(radius) {
    return 2 * Math.PI * radius
}