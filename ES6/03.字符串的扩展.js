// includes

// 传统javascript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串

// includes(): 返回布尔值，表示是否找到了参数字符串。
// startsWith(): 返回布尔值，表示参数字符串是否在源字符串头部。
// endsWith(): 返回布尔值，表示参数字符串是否在源字符串尾部。

// startWith() endsWith() 都还有第二个参数表示，开始搜索的位置。



// repeat() 返回一个新字符串，表示原字符串重复N次。


const text = 'hello'
console.log(text.length);
console.log(/^.$/.test(text));
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charCodeAt(0));
console.log(text.charCodeAt(1));




var msg = "Hello world!";
console.log(msg.includes('o', 1));


var indent = " ".repeat(4),
    indentLevel = 0;
var newIndent = indent.repeat(++indentLevel);
console.log(newIndent);
