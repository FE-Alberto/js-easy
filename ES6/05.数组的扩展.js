// Array.from
// 类数组的对象
// 和可遍历的对象。
// 其中包括ES6新增的Set和Map结构。
let ps = document.querySelectorAll('p');

Array.from(ps).forEach(function (p) {
    console.log(p);
});

// Array.from 方法可以将函数的 arguments 对象，转为数组。 
function foo() {
    var args = Array.from(arguments);
    console.log(args);
}
foo('a', 'b', 'c')

// 任何有 length EE.from方法转为数组。
var res = Array.from({ 0: '5', 1: "3", 2: "1", length: 3 });
console.log(res);

//Array.of 用于将一组值，转换为数组。
Array.of(3, 11, 8);

// 数组实例的 find() 和 findIndex()
// 用于找到第一个符合条件的数组元素，它的参数是一个回掉函数，
// 所有数组元素一次遍历该回调函数，直到找出第一个返回值为true的元素，然后返回该元素。

// 回调函数接受三个参数，依次为当前的值、当前的位置和原数组。
var ary = [1, 5, 10, 15].find(function (value, index, arr) {
    return value > 10;
})
console.log(ary);
// 数组第一个符合条件的数组的元素的位置，如果所有元素都不符合条件，则返回-1；
var ary = [1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 10;
})
console.log(ary);
// 这2个方法都接受第二个参数，用来绑定回调函数的this对象。
// 另外这俩个方法都可以发现NaN,弥补indexOf的不足。

for (let index of ['a', 'b'].keys()) {
    console.log(index);
}

// 数组的实例的三个新方法 entries() keys() 和 values();

// keys()和values用于遍历数组，他们都是返回一个遍历器，可以用for...of循环进行遍历，
// 唯一的区别是 keys()是键名 values() 键值 entries() 是键值名

for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b

