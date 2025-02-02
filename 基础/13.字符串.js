// string

// 字符串的操作
var str = 'zhufengpeixun';
str.length = '字符串长度';
str[0] = 'z';
console.log(str[str.length - 1]);


// 字符串的常用方法

// 字符串是基本数据类型，字符串的每一个操作都是值直接进行操作，不想数组一样基础空间的
// 操作的，所以不存在原有字符串是否改变这一说，肯定都是不变的

// charAt/charCodeAt
// 作用：charAt 根据索引获取指定位置的字符，
// charCodeAt不仅获取字符，它获取的是字符对应的 Unicode 编码值 ASCII 码值

// 参数：索引
// 返回：字符或者对应的编码

// indexof /lastIndexof
// 这俩个方法，可以获取字符串在字符串中的第一此或者最后一次出现的位置
// 返回 结果是 -1
// 验证当前字符串是否包含某个字符


// slice 查找
// 索引 n 到 m 查找 m 之前，从索引n开始找到索引为m处
// 不包含 m，把找到的字符当做新字符串的返回

// substring 和slice 语法一模一样
// slice 负数索引 而且 substring 不支持负数索引

// substr()
// 也是字符串截取的方法，
// 用法：str.substr(n,m)
// 从索引n开始截取m个字符

// 小写转大写
// toLowerCase();
// 全部转大写
// toUpperCase();

// split 
// 和数组中的 join 相对应
// 数组中的 join 是把数组的每一项按着指定的连接符为字符串

// split 是字把符串按照指定的分隔符，拆分成数组中的每一项


// replace
// 作用：替换字符串
// 参数：原有字符 要替换的新字符
// 替换后的字符串

// includes, startsWith, endsWith

// includes 是否字符串匹配 返回 true / false
let str = 'ewqsda'
console.log(str.includes('ew'));

// startsWith 字符串开头是否匹配
let str = 'ewqsda'
console.log(str.startsWith('ew'));
// endsWith

let str = 'ewqsda'
console.log(str.endsWith('ew'));

// 时间字符串格式化


// function addZero(val) {
//     return val < 10 ? '0' + val : val;
// }
var str = '2019-4-4 16:32:8'
var ary = str.split(' '),
    aryLeft = ary[0].split('-'),
    aryRight = ary[1].split(':');
console.log(aryLeft, aryRight);

var str = "bear klsdjklsdfio2q3123123120".split(' ').pop();
console.log(str);

var month = addZero(aryLeft[1]),
    day = addZero(aryLeft[2]),
    hour = addZero(aryRight[0]),
    minute = addZero(aryRight[1]);
var res = month + "月" + day + "日" + hour + "时" + minute + "分";

console.log(res);


let dateFormate = function (timeStamp) {
    let date = new Date(timeStamp)
    let year = date.getFullYear();
    let month = addZero(date.getMonth() + 1);
    let day = addZero(date.getDate());
    let hour = addZero(date.getHours());
    let min = addZero(date.getMinutes());
    let second = addZero(date.getSeconds());
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + second;
};

function addZero(val) {
    return val < 10 ? "0" + val : val;
};

dateFormate(new Date().getTime());


//正则 url 参数截取

! function name(par) {
    par.queryUrlParameter = function () {
        var obj = {},
            reg = /([^?=&#]+)(?:=([^?=&#]+)?)?/g;
        this.replace(reg, function () {
            var key = arguments[1],
                value = arguments[2] || null;
            obj[key] = value;

        })
        return obj;
    }
}(String.prototype);

function getRequest(url) {
    let parms = url;
    let obj = {}
    if (parms.indexOf("?") !== -1) {
        let str = parms.substr(1)
        let strs = str.split("&")
        for (let i = 0; i < strs.length; i++) {
            obj[strs[i].split('=')[0]] = (strs[i].split("=")[1]);
        }
    }
    return obj
}


var str = 'www.baidu.com/?lx=1&name=123'
console.log(getRequest(str));

function suijishu() {
    let codeZone = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    let str = ''
    for (let i = 0; i < 4; i++) {
        let n = Math.round(Math.random() * codeZone.length)
        str += codeZone.charAt(n);
    }
    return str;
}
console.log(suijishu());

function random(min, max) {
    return min + Math.random() * (max - min);
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

function ucFirst(val) {
    return val[0].toUpperCase() + val.substr(1);
}
console.log(ucFirst('aqeqwe'));
