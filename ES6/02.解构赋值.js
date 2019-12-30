// es6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称作解构赋值。
// 数组的解构赋值
var a = 1;
var b = 2;
var c = 3;

var [a, b, c] = [1, 3, 4]
console.log(a, b, c);

var [x, y] = [1, 2, 3]
console.log(x);
console.log(y);

var [foo = true] = [];
console.log(foo);

// 对象解构
// 对象解构和数组解构不同的地方：
// 数组解构是按索引顺序排列，变量取值由位置决定，
// 对象的属性没有次序，变量必须与属性名相同。才能取到正确的值。
var { foo, bar } = { foo: 'aaa', bar: "bbb" };
console.log(foo);
console.log(bar);

// 对象解构也可以嵌套结构对象。
var o = {
    p: [
        'hello',
        { y: "world" }
    ]
}
let { p: [x, { y }] } = o;
console.log(x);
console.log(y);

// 对象的解构也可以指定默认值。
var { x = 3 } = {};

var { x, y = 5 } = { x: 1 };
console.log(x, y);

// 解构的用途

// 1.交互变量值
{
    x = 1,
        y = 2
}
console.log([x, y] = [y, x]);

// 2.从函数返回多个值
function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();
console.log(a, b, c);

function example() {
    return {
        foo: 1,
        bar: 2
    }
}
var { foo, bar } = example();
console.log(foo, bar);

// 函数参数的定义：
function f([x]) {
    console.log(x);
}
f(['a'])
// 这种方法对提取JSON对象中的数据，尤其有用。
function f({ x, y, z }) {
    console.log(x, y, z);
}
f({ x: 1, y: 2, z: 3 })

// 遍历 Map 结构
var map = new Map();
map.set("first", "hello");
map.set("last", "world");

for (const [key, value] of map) {
    console.log(key + "_" + value);
}
// 获取键名
for (let [key] of map) {
    console.log(key);
}
// 获取键值
for (const [, value] of map) {
    console.log(value);
}

// 获取模块的指定方法
// 加载模块是，解构赋值使得输入语句非常清晰。
const { SourceMapConsumer, sourceNode } = requie('source-map')
