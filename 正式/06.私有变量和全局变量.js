// var a b c
// fn = xxx;

var a = 12,
    b = 13,
    c = 14;
function fn(a) {
    // 形参赋值 a = 12;
    // 变量提升 var b
    // 在私有作用域中，只有俩种请求是私有变量
    // 声明过的变量
    // 形参也是私有变量
    
    console.log(a,b,c); // 12 undefined 14
    var b = c = a = 20;
    console.log(a,b,c); // 20 20 20
}
fn(a);
console.log(a,b,c); // 12, 13, 20
