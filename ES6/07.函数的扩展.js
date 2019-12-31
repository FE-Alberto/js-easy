// 扩展运算符 ...
function push(array, ...items) {
    array.push(...items)
}

function add(x, y) {
    console.log(x + y);

}
var numbers = [4, 38]
add(...numbers)



// ES5的写法

function f(x, y, z) { }
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法

function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);

function f(v, w, x, y, z) {
    console.log(v, w, x, y, z);
}
var args = [0, 1]
f(-1, ...args, 2, ...[3])

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
])
let arr = [...map.entries()];
console.log(arr);

// 箭头函数
// es6 允许使用 箭头 => 定义函数
var f = v => v;
// 相同
var f = function (v) {
    return v;
}


// 箭头函数简化回调函数

[1, 2, 3].map(function (x) {
    return x * x;
})

[1, 2, 3].map(x => x * x)

var resut = value.sort((a, b) => a - b);

// 箭头函数几个注意点
// 函数体内 this 箭头函数中 是固定的 this绑定定义时所在的对象。
// 不可以当做构造函数。也就是说，不可以使用new命令，否则会抛出一个错误
// 不可以使用 arguments 对象

var handler = {
    id: "123456",
    init: function () {
        document.addEventListener("click",
            event => this.doSomething(event.type), false);
    },

    doSomething: function (type) {
        console.log("Handling " + type + " for " + this.id);
    }
}