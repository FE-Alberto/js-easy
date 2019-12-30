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


var ary = [1, 3, 4, 5, 53, 23, 1, 2, 13, 2];
var quchong = Array.from(new Set(ary))
console.log(quchong);

var obj = {}
for (let i = 0; i < ary.length; i++) {
    const item = ary[i];
    if (typeof obj[item] !== 'undefined') {
        ary[i] = ary[ary.length - 1];
        ary.length--;
        i--;
        continue
    }
    obj[item] = item;
}
console.log(obj);

function unique(ary) {
    var obj = {};
    for (let i = 0; i < ary.length; i++) {
        var item = ary[i];
        if (obj.hasOwnProperty(item)) {
            item = ary[ary.length - 1];
            ary.length--;
            i--;
            continue;
        }
        obj[item] = item;
    }
    obj = null;
    return ary;
}
var ary = [12, 3, 23, 14, 1, 123, 1, 1, 1, 1];
// 为什么ary.sort可以执行，因为sort是array.prototype上的内置属性方法。
ary.sort(function (a, b) {
    return a - b;
})
console.log(ary);

// 基于内置类原型扩展方法。供它的实例调取使用。
// 我们增加的方法最好设置前缀区分 防止把内置方法重写。
// js 中的链式写法：保证每一个方法执行返回的结果任然是当前类的实例，这样就可以继续调取方法使用了,
var ary = [12, 3, 23, 14, 1, 123, 1, 1, 1, 1];
Array.prototype.myUnique = function myUnique() {
    // 方法中的 this 一般都是实例
    var obj = {};
    for (let i = 0; i < this.length; i++) {
        var item = this[i];
        if (obj.hasOwnProperty(item)) {
            item = this[this.length - 1];
            this.length--;
            i--;
            continue;
        }
        obj[item] = item;
    }
    obj = null;
    return this;
}
ary.myUnique()// this.ary;
console.log(ary); 
var res = n.plus(3).minus(2); // 6
console.log(res);


var n = 5;
Number.prototype.plus = function plus() {
    console.log(this,arguments);
    if(typeof arguments[0] == 'number'){
        return this+arguments[0]
    }
    return console.log('参数不是数字');
}
Number.prototype.minus = function minus() {
    if(typeof arguments[0] == 'number'){
        return this-arguments[0]
    }
    return console.log('参数不是数字');
}
var res = n.plus(5).minus(3);
console.log(res);
