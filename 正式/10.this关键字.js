// this 特点 总是返回一个对象
// this 就是属性或方法 当前 所在的对象。

var person = {
    name: "张三",
    describe: function () {
        return "姓名" + this.name;
    }
}
person.describe();

// this 主要有以下几个使用场合
// 全局环境使用 this  它指的就是顶层对象 window

// 构造函数中的 this 指的就是实例对象

// 对象中的 this 如果对象方法里面包含 this。 this指向就是方法运行所在的对象，
// 该方法复制给另一个对象，就会改变 this 的指向。
var obj = {
    foo: function () {
        console.log(this);
    }
};
obj.foo()

// 如果this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。
var a = {
    p: 'Hello',
    b: {
        m: function () {
            console.log(this.p);
        }
    }
};

a.b.m()


var o = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function f() {
        var that = this;
        this.p.forEach(function (item) {
            console.log(that.v + ' ' + item);
        });
    }
}

o.f()


// 绑定 this 的方法 call apply bind;

// 函数实例的 call 方法，可以指定函数内部 this 的指向

var obj = {};
var f = function () {
    return this;
}
f() == window;
f.call(obj) === obj;

var n = 123;
var obj = { n: 456 };
function a() {
    console.log(this.n);
}
a.call()
a.call(null)
a.call(undefined)
a.call(window)
a.call(obj)
// call方法 接受多个参数
sum.call(thisValue, arg1, arg2);

function add(a, b) {
    return a + b;
}
console.log(add.call(this, 1, 2));

// apply方法和call方法类似 区别 apply 的参数是接收数组

function f(x, y) {
    console.log(x + y);
}
f.call(null, 1, 1);
f.apply(null, [2, 3]);

// 获取数组最大值的2种方法
var a = [10, 2, 4, 15, 9];
console.log(Math.max(...a));
console.log(Math.max.apply(null, a));

// bind方法用于函数体内的 this 绑定到某个对象，然后返回新函数

Function.prototype.bind();

var d = new Date();
d.getTime();

var print = d.getTime.bind(d);
console.log(print());


var add = function (x, y) {
    return x * this.m + y * this.n;
}

var obj = {
    m: 2,
    n: 2
};

var newAdd = add.bind(obj, 5);
newAdd(5)
console.log(newAdd(5));

// bind方法注意点；每一次返回新函数，
// 结合call方法使用



