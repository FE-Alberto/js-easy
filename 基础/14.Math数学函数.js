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

// random  获取0-1的随机小数
for (let i = 0; i < 10; i++) {
    console.log(Math.round(Math.random() * 10));
}



