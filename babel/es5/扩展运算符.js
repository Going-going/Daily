'use strict';

var _console;

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 含义
var a1 = [1, 2, 3];
(_console = console).log.apply(_console, a1); //1 2 3

var dom = document.querySelectorAll('div');
console.log([].concat(_toConsumableArray(dom))); //[div, div, div]

// 替代数组的apply函数
var a2 = [1, 2, 3];
var a3 = [4, 5, 6];
//  合并数组
// es5
Array.prototype.push.apply(a2, a3); // [1, 2, 3, 4, 5, 6]
console.log(a2);
// es6
a2.push.apply(a2, a3);
console.log(a2); //[1, 2, 3, 4, 5, 6, 4, 5, 6]

//去重
var a4 = [].concat(_toConsumableArray(new Set(a2)));
console.log(a4); //[1, 2, 3, 4, 5, 6]

// Math.max()
console.log(Math.max.apply(null, a4)); //6

console.log(Math.max.apply(Math, _toConsumableArray(a4))); //6

// 日期函数
var d1 = new (Date.bind.apply(Date, [null, 2015, 1, 1]))();
console.log(d1); //Sun Feb 01 2015 00:00:00 GMT+0800 (中国标准时间)

var d2 = new (Function.prototype.bind.apply(Date, [null].concat([2015, 1, 1])))();
console.log(d2);

// 解构赋值
var list = [1, 2, 3, 4, 5, 6];

var _list = list,
    _list2 = _toArray(_list),
    a = _list2[0],
    b = _list2.slice(1);

console.log(a); // 1
console.log(b); // [2, 3, 4, 5, 6]

// 特殊例子
// let [c1,c2,...c3, c4] = list;
// console.log(...c3); //报错
list = [];

var _list3 = list,
    _list4 = _toArray(_list3),
    c1 = _list4[0],
    c2 = _list4.slice(1);

console.log(c1); //undefined
console.log(c2); //[]

list = ['foo'];

var _list5 = list,
    _list6 = _toArray(_list5),
    first = _list6[0],
    rest = _list6.slice(1);

console.log(first); //foo
console.log(rest); //[]

console.log([].concat(_toConsumableArray('hello'))); //["h", "e", "l", "l", "o"]

var str = 'x\uD83D\uDE80y';
console.log(str.length); //4
console.log([].concat(_toConsumableArray(str))); //["x", "🚀", "y"]
var r1 = [].concat(_toConsumableArray(str)).reverse();
var r2 = str.split('').reverse();
console.log(r1); //["y", "🚀", "x"]
console.log(r2); //["y", "�", "�", "x"] 会转错

// 伪数组转真正数组
console.log(dom); // NodeList(3) [div, div, div]
console.log([].concat(_toConsumableArray(dom))); //[div, div, div]

var arrayLike = {
    '0': 1,
    '1': 2,
    '2': 3,
    'length': 3
};

console.log([].concat(_toConsumableArray(arrayLike))); //[1, 2, 3]


var map = new Map([]);