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



- parseFloat






