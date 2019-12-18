// 函数类型 function
// 函数引用类型

function fn(n, m) { // 形参：入口
    // 函数体
    let total = 0;
    total = n + m;
    return total // return 出口
}
fn(10, 20) // 实参：给形参传递的具体值
console.log(fn(10, 20));


// 实参一定是个值，即使我们写的变量或者表达式，也是把变量或者表达式计算的结果作为值传递给形参变量

// 函数执行会生成一个私有的作用域，
// 目的：
// 1 把原有函数体变为 js 表达式
// 2 保护里面的私有变量不受外界干扰
// 我们把函数执行的这种保护机制 成为闭包


// arguments 函数的内置实参集合
// 处理 字符串和非有效数字
function sum() {
    // argument 它是一个类数组 不是数组 不能使用数组中的方法
    // 是实参集合
    let total = null;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        let item = arguments[i];
        item = Number(item);
        isNaN(item) ? null : total += item;
    }
    return total
}
console.log(sum(10, "123", "AA", 32, 2, 3, 1));






function sum2() {
    let total = null;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        let item = arguments[i];
        item = Number(item);
        isNaN(item) ? null : total += item;
    }
    return total;
}
console.log(sum2(10, "123", "AA", 32, 2, 3, 1));

// es6 求和

let sum = (...arg) => {
    arg = arg.filter(item => !isNaN(item));
    return eval(arg.join("+"));
}

console.log(sum(10, "123", "AA", 32, 2, 3, 1));

// 随机验证码
// 数字+字母
// 找图片
// 滑动拼图
// 问答类
// 点击汉子拼成语
// 把倒着文字或者图片 整过来



function queryCode() {
    let codeArea = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'

    // 准备4个索引
    let res = []
    for (let i = 0; i < 4; i++) {
        var n = Math.round(Math.random() * codeArea.length)
        var char = codeArea.charAt(n);
        res.push(char);
    }
    return res;
}

console.log(queryCode());