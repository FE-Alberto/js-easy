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

