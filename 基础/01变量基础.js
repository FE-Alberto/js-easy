const num = 100;
num = 200;
console.log(num);

let a = Symbol("xiaoming")
let b = Symbol("xiaoming")
let c = "Symbol('xiaoming')"
console.log(a);
console.log(b);
console.log(typeof c);
console.log(a == b);

let num = 12;
isNaN(num);


console.log(Boolean(!0));

// var obj = {
//     name:"珠峰",
//     age:9,
// }
// var name = "zhufeng"
// console.log(obj.name);
// console.log(obj['name']);
// console.log(obj[name]);

// 一个对象中的属性名不仅仅是字符串格式还有可能是数字格式


var obj = {
    n: 10,
    m: obj.n * 10,
}
console.log(obj.m)


var ary1 = [3, 4];
var ary2 = ary1; // [3,4]
ary2[0] = 1; // [1,4] [1,0]
ary2 = [4, 5]; //[4,5]
ary2[1] = 2; // [4,2]
ary1[1] = 0; // [1,0]
console.log(ary1, ary2);

let admin;
let name = "john";
admin = name;
console.log(admin);

