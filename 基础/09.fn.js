function fn() {
    var total = 10;
    total += 10;
    total /= 2;
    total = total.toFixed(2);
    console.log(total);
}
fn();


function checkAge(age) {
    return (age > 18) || confirm('Do you have your parents permission to access this page?')
}

checkAge(1)

function min(a, b) {
    if (a > b) {
        return b
    } else {
        return a
    }
}
console.log(min(1, 2));

function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
}

ask(
    "Do you argee",
    function () {
        console.log('you argeed');
    },

    function () {
        console.log('you canceled the execution');
    }
)

// 箭头函数

// 如果参数大于1 需要加圆括号
let sum = (a, b) => a + b;
console.log(sum(1, 23));

// 参数只有一个 

let double = n => n * 2;
console.log(double(2));

// 没有参数，圆括号需要保留
let sayHi = () => alert("hello!");
console.log(sayHi);


// 箭头函数是可以像函数表达式一样使用。
let age = prompt('what is your age?', 18);

let welcome = (age < 18) ? () => console.log('hello') : () => console.log('Greetings');

console.log(welcome());


ask = (question,yes,no) =>{
    if (confirm(question)) yes()
    else no();
}
