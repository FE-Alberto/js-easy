
var a = 1;
var b = ++a + ++a; a = a + 1;  // 2
console.log(a);
console.log(b);

var a = 1;
var b = ++a + a++;
console.log(a); 3
console.log(b); 4



// 运算符的优先级决定了表达式中运算执行的先后顺序，即优先级高先执行
// 前自增:算数运算符优先于赋值运算符，先执行++操作，再执行赋值操作


var a = 1;
var b = ++a;// a = a+1, b =a 
console.log(a);// 2
console.log(b); //2
//  后自增：赋值运算符优先于算数运算符，先执行赋值操作，再执行++操作

var a = 1;
var b = a++;// b = a, a = a +1
console.log(a);//2
console.log(b);//1

// null 和 undefiend
// undefiend 派生于 null;

var var1 = Object.prototype.toString.call(null)
var var2 = Object.prototype.toString.call(undefined)
console.log(var1);
console.log(var2);

// number 强制转换
Number();
parseInt();
// String() 强制转换
// 原始类型值
console.log(String({ a: 1 }));

console.log(String({ a: 1 }.toString()));

var obj = {
    valueOf: function () {
        return {}
    },
    toString: function () {
        return {}
    }
}
String(obj);

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean('\n'));
console.log(Boolean('\t'));

Number();
String();
Boolean();


// 自增/自减
// 后自增 自减  是将变量与 值 加 1 和 -1
// 自增/自减只能应用于变量
let num = 2;
let n = num++
let s = ++num;
console.log(num); 4
console.log(n); 2
console.log(s); 4
