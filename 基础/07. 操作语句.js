// js 中判断操作语句
var num = 12;
if (num > 10) {
    num++;
} else if (num >= 0 && num <= 10) {
    num--;
} else {
    num += 2;
}
console.log(num); //13
// 在js中 + - * / % 都是数学运算，除+以外
// 其余在运算的时候，遇到非数字类型都会先转化为数字类型 然后在运算

// 检测数据类型的方式 typeof instanceof constructor 
// object.prototype.toString.call()
// typeof 检查值的类型


// 三元运算符
// 条件 ？成立 ：不成立 

num >= 10 ? (num++, num *= 10) : null;

// 思考题
var num = 12;

if (num > 0) {
    if (num < 10) {
        num++
    } else {
        num--
    }
} else {
    if (num == 0) {
        num *= 2;
    }
}

num > 0 ? num < 10 ? num++ : num-- : num == 0 ? num *= 2 : null;

// switch case 绝对比较类型

//  每一种 case 情况比较都是基于 === 绝对相等来完成
// true 相等比较如果登号左右俩边的类型不一样 首先会转化为一样的数据类型
// 然后再进行比较
// 不加 break 后面的条件是否成立都会执行，利用此机制，我们可以按错一些特殊的处理
// 2个条件相同执行同一个事情

var num = 9;
switch (num) {
    case 10:
        num++;
        break;
    case 5:
        num--
        break;
    default:
        num = 0;
}
console.log(num);

// for 循环


// for 循环语法组成
//  定义初始值 设定循环成立条件 条件成立会执行循环体中的内容



for (let index = array.length-1; index >= 0; index--) {
    console.log(array.length);
    
    const e = array[index];
    console.log(e);
}

let array = [12,3,3,22,31];
for (let index = 0; index < array.length; index++) {
    
    if(index%2 == 0){
        console.log(array[index]);
    }
}

for (let index = 0; index < array.length; index+= 2) {
    const element = array[index];
    console.log(element);
    
}