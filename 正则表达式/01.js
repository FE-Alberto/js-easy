let reg = /dog/
// test方法 得到字符串模式匹配就返回true
console.log(reg.test('dog'));

// 任何字符  .
const regex = /.og/
console.log(regex.test('fog'));
console.log(regex.test('dog'));

// 反斜杠 \ 将特殊字符切换成普通字符。
const regex1 = /dog./
console.log(regex1.test('dog.'));
console.log(regex1.test('dog1'));

const regex2 = /dog\./
console.log(regex2.test('dog.'));
console.log(regex2.test('dog1'));

// 字符集 [] 来匹配一个字符，该字符串可能是 [] 中的任意字符。
/[dfl]og/.test('dog');
/[dfl]og/.test('fog');
/[dfl]og/.test('lig');