'use strict';

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