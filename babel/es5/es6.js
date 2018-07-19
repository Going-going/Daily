'use strict';

var _arr, _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var str = '1234567890';

var fn = function fn(x, y) {
    return x * y;
};

(function (x) {
    return x * x;
});

(function (x) {
    return x * x;
});

var sqr = function sqr(x) {
    return x * x;
};

// 返回对象
var test = function test() {
    return { id: 3, val: 20 };
};

var arr = [1, 2, 3, 4, 5, 3, 2, 3, 46];
var newArr = [].concat(_toConsumableArray(new Set(arr)));

console.log(newArr);

var push = function push(array) {
    for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        items[_key - 1] = arguments[_key];
    }

    array.push.apply(array, items);
};

var add = function add(x, y) {
    return x + y;
};

var ary = [1, 2];
push.apply(undefined, [ary].concat(ary));
var a = add.apply(undefined, ary);
// console.log([...new Set(ary)], a);

var MAX = Math.max.apply(null, [13, 2, 4]);
console.log(MAX);

var max1 = Math.max.apply(Math, [13, 2, 34]);
console.log(max1);

arr = [1, 2, 3, 4, 5];
var arr1 = arr.filter(function (index, item) {
    return item > 3;
});

console.log(arr1);

arr = [1, 2, 3];
arr1 = [4, 5, 6];
Array.prototype.push.apply(arr, arr1);

// console.log(arr);
(_arr = arr).push.apply(_arr, _toConsumableArray(arr1));
console.log(arr);
var arr3 = [].concat(_toConsumableArray(new Set(arr)));
console.log(arr3);
// ...转换
var Dom = [].concat(_toConsumableArray(document.querySelectorAll('div')));
console.log(Dom); //[div, div, div]

var array = [1, 2, 3, 4, 5, 6, 7, 7];
(_console = console).log.apply(_console, array); //1 2 3 4 5 6 7 7