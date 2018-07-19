const str = '1234567890';

const fn = (x, y) => x * y 

x => x * x;

x => {return x * x}

let sqr = x => x * x;

// 返回对象
let test = () => ({id: 3, val: 20})

let arr = [1,2,3,4,5,3,2,3,46];
let newArr = [...new Set(arr)];

console.log(newArr)

let push = (array, ...items) => {
    array.push(...items);
}

let add = (x, y) => {
    return x + y;
}

const ary = [1,2];
push(ary, ...ary);
const a = add(...ary);
// console.log([...new Set(ary)], a);

let MAX = Math.max.apply(null, [13,2,4]);
console.log(MAX);

let max1 = Math.max(...[13,2,34]);
console.log(max1);

arr = [1,2,3,4,5];
let arr1 = arr.filter((index,item) => {
    return item > 3;
})

console.log(arr1);

arr = [1,2,3];
arr1 = [4,5,6];
Array.prototype.push.apply(arr, arr1);

// console.log(arr);
arr.push(...arr1);
console.log(arr);
let arr3 = [...new Set(arr)];
console.log(arr3);
// ...转换
let Dom = [...document.querySelectorAll('div')];
console.log(Dom); //[div, div, div]

let array = [1,2,3,4,5,6,7,7];
console.log(...array); //1 2 3 4 5 6 7 7
