// 第一种 双for循环 依次拿出数组的中的每一项；排除最后一项没有需要比较的内容。
// 和当前拿出项后面的每一项依次比较
// 如果发现重复的 我们把找到的这个重复向在原有的数组中删除
// 缺点：性能不好
for (let i = 0; i < ary.length - 1; i++) {
    const ele = ary[i];
    for (let j = i + 1; j < ary.length; j++) {
        if (ele === ary[j]) {
            ary.splice(j, 1);
            j--; // 删除后先减减，在加加的时候相当于没加没减
        }
    }
}

console.log(ary);


// 第二种 基于对象的属性名不能重复 实现高性能数组去重
// 思路创建一个空对象
// 便利数组中的每一项，把每一项存储的值，当属性名和属性值存储起来
var ary = [13, 2, 3, 5, 32, 3, 1, 2, 3, 2, 311, 32];
var obj = {}

for (let k = 0; k < ary.length; k++) {
    const item = ary[k];
    if (typeof obj[item] !== 'undefined') {
        // ary.splice(k,1);
        // k--;
        // 把数组的最后一项结果获取到，然后替换当前项
        // 再把数组最后一项删除
        ary[k] = ary[ary.length - 1];
        ary.length--;
        k--;
        continue;
    }
    // 把这一项作为对象的属性名和属性值存储起来
    obj[item] = item;
}
console.log(obj);
// 第三种 es6 中的 set
new Set(ary);
Array.from(new Set(ary));
console.log(ary);












let arry = [1, 3, 2, 5, 6, 2, 3, 34, 5, 1, 3, 23]
let obj = {}
for (let i = 0; i < arry.length; i++) {
    let item = arry[i];
    if (typeof obj[item] !== 'undefined') {
        arry[item] = arry[arry.length - 1]
        arry.length--;
        i--;
        continue;
    }
    obj[item] = item;
}
console.log(obj);

console.log(Array.from(new Set(arry)));

// https://zh.javascript.info/