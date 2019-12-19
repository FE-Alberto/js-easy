1. number 数据类型
NaN: not a number 但是它是数字类型的
isNaN: 检测当前值是否不是有效数字，返回true 代表不是有效数字 返回 false 代表是有效果数字
- 首先验证当前要检测的只是不是数字类型 如果不是
  浏览器会把值转化为数字类型
- 当前检测的值以及是数字类型，是有效数字类型返回false 不是返回 true(数字类型中只有NaN 不是有效数字 其余都是有效数字)

- 基础类型转换为数字的几种方法
- Number('123') -> 123
    - isNaN：检测当前值是否不是有效数字，返回true代表不是有效数字，返回false是有效数字 语法：isNaN([value])
        var num=12;
        isNaN(num); //->检测num变量存储的值是否为非有效数字 false
        isNaN('13') =>false
        isNaN(true) =>false
        isNaN(false) =>false
        isNaN(null) =>false
        isNaN(undefined) =>true
        isNaN({age:9}) =>true
        isNaN([12,23]) =>true
        isNaN([12]) =>false
        isNaN(/^$/) =>true
        isNaN(function(){}) =>true

重要：isNaN检测的机制

- parseInt
    parseInt方法用于将字符串转为整数。
    如果字符串头部有空格，空格会被自动去除。
    如果parseInt的参数不是字符串，则会先转为字符串再转换。
- parseFloat
    方法用于将一个字符串转为浮点数。
    如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分。


- Number 类型转化规则
    - undifined NaN
    - null      0
    - true/false 1 and 0
    - string   纯数字字符串包含数字，如果剩余字符串为空，则转换结果为 0。将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 NaN。

