// 在整个的数据开发过程中，涉及到数据结构，能用Map就不使用数组，尤其是复杂的数据结构。如果对要求存储的数据有唯一性要求，推荐使用Set。

// Set数据结构
// ES6 中类似于数组，但是成员都是唯一的值，没有重复的值。
// Set 本身是一个构造函数，用来生成 Set 数据结构。

// Set 结构有以下属性。
// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set的成员总数。

// Set 数据结构有以下方法。
// add(value)：添加某个值，返回Set结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。


// Array.from 可以将 Set 结构转为数组
var ary = [1, 3, 5, 3, 5, 6, 3, 3, 1, 2, 3, 11, 23, 4]
var s = Array.from(new Set(ary));
console.log(s);



// 遍历操作
// Set 结构有一个 values 方法，返回一个遍历器。
let set = new Set(['red', 'green', 'blue']);
for (let item of set.values()) {
    console.log(item);
}
// Set 结构的默认遍历器就是它的values 方法。
// 可以省略 values 方法，直接用 for of 循环遍历 Set
let set = new Set(['red', 'green', 'blue']);
for (let [key, value] of set.entries()) {
    console.log(key, value);
}

let set = new Set(['red', 'green', 'blue'])
let arr = [...set]
console.log(arr);

// 另一种数组去重
let arr = [3, 5, 2, 2, 5, 5]
let unique = [...new Set(arr)];
console.log(unique);


// 使用 Set 可以很容易实现并集 和交集

let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])

let unicon = new Set([...a, ...b])
console.log(unicon);

let intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect);


// Map 基本用法
// JS对象，本质上是键值对的集合，但是只能用字符串当做键，这给使用带来了很多限制。

var data = {}
var element = document.getElementById('myDiv')
data[element] = metadata;

// es6 提供了 map 数据结构，它类似于对象， 也是键值对的集合
// 但是 "键" 的范围不限制于字符串，各种类型的值(包括对象)都可以当做键。
// 也就是说 Object 结构提供了 字符串-值的对应，Map，结构提供了 值-值的对应。


var map = new Map([["name", "张三"], ["title", "Author"]]);

map.size // 2
map.has("name") // true
map.get("name") // "张三"
map.has("title") // true
map.get("title") // "Author"


var map = new Map();
map.set(['a'], 555);
map.get(NaN);
// map 数据结构的属性和方法。
// size：返回成员总数。
// set(key, value)：设置key所对应的键值，然后返回整个Map结构。如果key已经有值，则键值会被更新，否则就新生成该键。
// get(key)：读取key对应的键值，如果找不到key，返回undefined。
// has(key)：返回一个布尔值，表示某个键是否在Map数据结构中。
// delete(key)：删除某个键，返回true。如果删除失败，返回false。
// clear()：清除所有成员，没有返回值。

// Map 原生提供三个遍历器。
// keys()：返回键名的遍历器。
// values()：返回键值的遍历器。
// entries()：返回所有成员的遍历器。

// 结合数组的map方法、filter方法，可以实现Map的遍历和过滤（Map本身没有map和filter方法）。
let map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
let map1 = new Map([...map0].filter(([k, v]) => k < 3));
console.log(map1);
// Map 还有一个forEach方法，与数组forEach方法类似，
map0.forEach(function (val, key, map) {
    console.log("key" + key, 'val' + val);
})
// forEach 方法接受第二个参数 用来绑定 this

var repoter = {
    report: function (key, value) {
        console.log(key, value);
    }
}
map0.forEach(function (value, key, map) {
    this.report(key, value)
}, repoter)
