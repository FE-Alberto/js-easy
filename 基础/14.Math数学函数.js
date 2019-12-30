// math 数学函数 是对象类型

// math 的常用方法

// abs 绝对值
console.log(Math.abs(-10));

// ceil 向上取整
console.log(Math.ceil(10.2));


// floor 向下取证
console.log(Math.floor(-10.2));

// round 四舍五入
console.log(Math.round(4.23));

// sqrt 开平方
console.log(Math.sqrt(16));

// pow 取幂
console.log(Math.pow(1, 2));


// max 和 min 获取最大值和最小值
let ary = [12, 3, 23, 4, 123, 12345]
console.log(Math.max(...ary));
console.log(Math.min(...ary));

// PI 获取圆周率
console.log(Math.PI);

// random  获取0-10的随机数
for (let i = 0; i < 10; i++) {
    console.log(Math.round(Math.random() * 10));
}

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
