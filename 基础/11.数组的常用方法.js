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
// 数组末尾增加新的内容
// 参数：是增加内容
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

// 学习数组方法通过可以查看 数组上哪些方法
console.dir(Array.prototype);


// 数组中高级方法
ary.every()
ary.filter()
ary.find()
ary.findIndex()
ary.includes()
ary.forEach()
ary.keys()
ary.map()
ary.reduce()
ary.reduceRight()
ary.some();






let num = [13, 2, 5, 6, 21, 3, 21, 6, 4, 3, 2, 2, 21, 1]
let obj = {}
for (let i = 0; i < num.length; i++) {
    let item = num[i];
    if (typeof obj[item] !== 'undefined') {
        num[i] = num[num.length - 1];
        num.length--;
        i--;
        continue;
    }
    obj[item] = item;
}
console.log(obj);