//  JS 中的对象用来存储键值对和更复杂的实体。
// 对象可以通过花括号{} 和其中包含一些可选的属性来创建，属性是一个键值对，
// 键是一个字符串，
// 值是任何类型

// 文本和属性 
let obj = {}
obj[1] = 'john'
obj[2] = '30'
console.log(obj);
delete obj[1]
console.log(obj);

// 方括号
let user = {}
// set
user['likes birds'] = true;
// get
console.log(user['likes birds']);
// del
delete user['likes birds']


// 计算属性 
let fruit = 'apple'
let bag = {
    [fruit + 'Computer']:5
}
console.log(bag);


// 属性值的简写 : 属性名跟变量名一样。这种应用场景很常见，所以提供一种很便利的方式来定义对象的属性值。

// 也可以简写和 正常方式混淆
function makeUser(name,age) {
    return {
        name,
        age:21,
    }
}
let user = makeUser("john",31);
console.log(user.name);
console.log(user.age);
// 存在值的检测

let user = {};
console.log(user.noSuchProperty === undefined);


let obj = {
    user:undefined
}
console.log(obj.user);
console.log('user' in obj);

// 对象的一个显著的特点就是可以访问任何属性

let a = {};
let b = {};
console.log(a == b);
console.log(a === b);

// 对象 复制和合并
Object.assign();
// 合并
let user = {name:"john"};
let permiss1 = { canView:true}
let permiss2 = { canEidt:true}
console.log(Object.assign({},user,permiss1, permiss2));

// 复制

console.log(Object.assign({},user));

let user = {
    name: "john",
    surname:"Smith"
}
user.name = 'Pete'
console.log(user);
delete user.name;
console.log(user);

function isEmpty(obj) {
    for (const key in obj) {
        return false
    }
    return true
}
let s = {
    name : "1",
}
console.log(isEmpty(s));
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function sum(salaries) {
    let sum = 0;
    for (const key in salaries) {
        if(key in salaries){
            sum += salaries[key]  
        }
    }
    return sum;
}
console.log(sum(salaries));

// 在调用之前
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function multiplyNumeric(menu) {
    for (const key in menu) {
        if(typeof menu[key] == "number"){
           menu[key] *= 2;
        }
    }
    return menu;
}

console.log(multiplyNumeric(menu));
