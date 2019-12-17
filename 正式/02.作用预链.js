function fn() {
    // 变量提升： 无
    b = 13;
    console.log(b);
    console.log('b' in window);
}
// 在作用域链中查找如果找到 window 也没有这个变量，相当于给这个window设置了一个属性 b

fn();
console.log(b);
// 只对 等号左边进行变量提升 var fn =
var fn = function () {
    console.log('123');
};

// 判断条件下的变量提升