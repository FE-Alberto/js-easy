// 数组的特点
// 1. 以数组作为索引（属性名），索引从零开始递增
// 2. 有一个 length 属性存储数组的长度

// 数组中的每一项值可以是任何类型
// 记忆方法
// 方法的作用
// 方法的参数
// 方法的返回值
// 原有数组是否改变

// 数组的方法
var ary = [12, 32, 3, 3];
ary[0]; //数字的第一项
ary[ary.length - 1]; // 数组的最后一项

// push 
// 数组末尾增加新的内容。
// 参数：是增加内容。
// 返回值：是新增后数组的长度。
// 原有数组改变
ary.push(120);
console.log(ary);
// pop 
// 数组末尾删除一项
// 参数：无
// 被删除的那一项
// 原有数组改变
let del = ary.pop();
console.log(del);
// shift 
// 删除数组中的第一项
// 无
// 被删除的哪一项内容
// 原有数组改变

// unshift
// 添加数组的第一项
// 参数:新增的内容
// 新增加的内容
// 原有数组改变

// splice 
// 基于splice可以 删除指定的内容 向数组指定的内容增加 还可以改指定位置的信息。

// 语法：删除
// 从索引 n 开始删除 m 个内容 
// 把删除的内容以一个新数组返回，原有数组改变
ary.splice(n, m)

// 语法：新增
// 把新增的数组放到 n 前面
ary.splice(n, 0, x)

// 末尾删除
ary.pop()
ary.splice(ary.length - 1);
ary.length--;

// 末尾增加
ary.push;
ary.splice(ary.length, 0, 12);
ary[ary.length] = 2;

// slice 
// 在一个数组中按着条查找内容
// 参数 有俩个 n 和 m,
// 原有数组不变
// 返回结果 查找以一个新数组查找 m 前一个

// concat 实现多个数组拼接
// [].concat(ary1,ary2) 
// (7) [123, 2, 323, 4, 3, 32, 3]

// 数组转字符串
// toString()
// join() 


// 颠倒数组
// reverse 
// 作用：把数组倒过来的排列
// 参数： 无
// 原有数组改变

// sort
// 作用：给数组排序
// 参数：无或是个函数
// 返回：原有数组改变
// 问题：sort在不传递参数的情况的下 只能处理10以内的数字排序

var ary = [1, 3, 4, 5, 3, 123, 3];
ary.sort(function (a, b) {
    return a - b; // a-b 升序 b-a 降序
});
// indexOf / lastIndexOf
// 这俩种不兼容 ie6-8
// 返回：如果数组中有这一项，返回的大于等于零的索引，
// 如果没有这一项，返回的索引为 -1；

console.log(ary.indexOf(3) > -1);


let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

console.log(fruits.length);

let styles = ['jazz', 'blues'];

styles.push('rock-n-roll')
styles.length % 1
console.log(styles);


// 学习数组方法通过可以查看 数组上哪些方法
console.dir(Array.prototype);


// 数组中高级方法

// 数组是否包含某一个数组
ary.includes()

ary.filter()
ary.find()
ary.findIndex()
// forEach与map 方法佷相似，也是对数组的所有成员一次执行参数函数。
// 但是没有返回值，只用来操作数据，
// 如果数组遍历的目的是为了得到返回值，那么使用map 否则使用forEach
ary.forEach()
var out = [];
[1,2,3].forEach(function(elem) {
    this.push(elem * elem);
},out);
console.log(out); // [1,4,9]

ary.keys()

// map方法将数组的所有值一次传入参数函数，
// 然后把每一次的执行结果 组成恒毅新的数组
ary.map()
[1,2,3].map(function (elem,index,arr) {
    return elem * index;
})
// 依次从左到右处理 
ary.reduce()
// 依次从右到左处理
ary.reduceRight()
ary.some();


let str = [1, 123, 5, 5, 23, 4, 2, 13, 1]
let obj = {}
for (let i = 0; i < str.length; i++) {
    let item = str[i];
    if (typeof obj[item] !== 'undefined') {
        item = str[str.length - 1];
        str.length--;
        i--;
        continue;
    }
    obj[item] = item;
}
console.log(obj);

// find 和 findIndex

let users = [
    { id: 1, name: "john" },
    { id: 2, name: "john2" },
    { id: 3, name: "john3" }
]

// let user = users.find(item => item.id == 1)
// console.log(user);

// filter
let results = users.filter((item, index, array) => {
    console.log(array.length);
})

// sort
arr.sort((a, b) => a - b)


let user = {
    age: 18,
    younger(otherUser) {
        return otherUser.age < this.age;
    }
}
let users = [
    { age: 12 },
    { age: 3 },
    { age: 1 }
]
let youngerUsers = users.filter(user.younger, users)
console.log(youngerUsers.length);

var ary = [13, 24, 213, 523, 123, 123, 3, 1, 121, 1, 1]
var obj = {}
for (let i = 0; i < ary.length; i++) {
    var item = ary[i];
    if (typeof obj[item] !== 'undefined') {
        item = ary[ary.length - 1];
        ary.length--;
        i--;
        continue;
    }
    obj[item] = item;
}
console.log(obj);
