// let  const var
{
    let a = 10;
    var b = 1
}
// let 会声明出代码块级作用域。
// let 没有变量提升。
console.log(a);
console.log(b);

// const 是申明的常量 一旦申明就无法改变。

// const的作用域与let命令相同：只在声明所在块级作用域内有效。

const person = {
    name:"Nicholas"
}
console.log(person.name);

person = {
    name:"greg"
}
// 暂时性死区
if(true){
    console.log(typeof value);
    let value = 'blue'
}

for (var i = 0; i < 10; i++) {
    process(item[i])
}
console.log(i);


var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
funcs.forEach(function (func) {
    func();
})

var funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push((function(value){
        return function(){
            console.log(value);
        }
    }(i)));
}
funcs.forEach(function(func){
    func();
})

var func = [];
for (const i = 0; i < 10; i++) {
    func.push(function(){
        console.log(i);
    })
}

let RegExp = 'hello!';
console.log(RegExp);
console.log(window.RegExp === RegExp);

const ncz = 'hi!';
console.log(ncz);
console.log('ncz' in window);



