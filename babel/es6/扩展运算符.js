// 含义
let a1 = [1,2,3];
console.log(...a1); //1 2 3

let dom = document.querySelectorAll('div');
console.log([...dom]); //[div, div, div]

// 替代数组的apply函数
let a2 = [1,2,3];
let a3 = [4,5,6];
//  合并数组
// es5
Array.prototype.push.apply(a2, a3); // [1, 2, 3, 4, 5, 6]
console.log(a2);
// es6
a2.push(...a3);
console.log(a2); //[1, 2, 3, 4, 5, 6, 4, 5, 6]

//去重
let a4 = [...new Set(a2)];
console.log(a4); //[1, 2, 3, 4, 5, 6]

// Math.max()
console.log(Math.max.apply(null, a4)); //6

console.log(Math.max(...a4)); //6

// 日期函数
let d1 = new (Date.bind.apply(Date, [null, 2015, 1, 1])); 
console.log(d1) //Sun Feb 01 2015 00:00:00 GMT+0800 (中国标准时间)
 
let d2 = new Date(...[2015, 1, 1]);
console.log(d2);

// 解构赋值
let list = [1,2,3,4,5,6];
let [a, ...b] = list;
console.log(a); // 1
console.log(b); // [2, 3, 4, 5, 6]

// 特殊例子
// let [c1,c2,...c3, c4] = list;
// console.log(...c3); //报错
list = [];
let [c1,...c2] = list;
console.log(c1); //undefined
console.log(c2); //[]

list = ['foo'];
let [first, ...rest] = list;
console.log(first); //foo
console.log(rest); //[]

console.log([...'hello']); //["h", "e", "l", "l", "o"]

let str = 'x\uD83D\uDE80y';
console.log(str.length); //4
console.log([...str]) //["x", "🚀", "y"]
let r1 = [...str].reverse();
let r2 = str.split('').reverse();
console.log(r1) //["y", "🚀", "x"]
console.log(r2); //["y", "�", "�", "x"] 会转错

// 伪数组转真正数组
console.log(dom); // NodeList(3) [div, div, div]
console.log([...dom]); //[div, div, div]

let arrayLike = {
    '0': 1,
    '1': 2,
    '2': 3,
    'length':3
};

console.log([...arrayLike]) //[1, 2, 3]


let map = new Map([
    
])