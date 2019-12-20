/**  
 * 这里列出固有的可达值基本集合，这些值明显不能被释放。
    比方说：
    当前函数的局部变量和参数。
    嵌套调用时，当前调用链上所有函数的变量与参数。
    全局变量。
    （还有一些内部的）
    这些值被称作根。

    如果一个值可以通过引用或引用链，从根值访问到，则认为这个值是可达的。

    比方说，如果局部变量中有一个对象，并且该对象具有引用另一个对象的 property，则该对象被认为是可达的。而且它引用的内容也是可达的。下面是详细的例子。
 */

let user = {
    name: "john"
}
console.log(user.name);
console.log(Object.user.name);

let user = {
    name: "john"
}
let admin = user;

user = null;

let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]: 123
};
// symbol 属性不参与 for in 循环；
for (let key in user) {
    console.log(user[key]);
};

// Object -  oriented programming OOP

let user = {
    name:"join",
    age:30,
    sayHi () {
        console.log(this.name);
    }
}
console.log(user.sayHi());

