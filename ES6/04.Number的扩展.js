// Number.isFinite(); 用于检测一个数值是否为无穷。
// Number.isNaN();用于检测一个数值是否为 NaN
isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false

// Number.isInteger() 和 安全整数



// Math.trunc(); //用于去除一个数的小数部分。 返回整数部分。
console.log(Math.trunc(4.1));
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.1));
console.log(Math.trunc(-4.2));

// Math.sign() //用于判断一个数到底是正数 负数还是 零
console.log(Math.sign(-5));
console.log(Math.sign(5));
console.log(Math.sign(0));
console.log(Math.sign(NaN));
