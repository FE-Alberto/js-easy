function fn() {
    // 变量提升： 无
    b = 13;
    console.log(b);
    console.log('b' in window);
}
fn();
// 在作用域链中查找如果当前没找到 继续向上查找 如果 window 也没有这个变量，相当于给这个window设置了一个属性 b



