let arr = [2, 3, 4, 5, 6, 8, 9];

console.log('-------------filter--------------');
let arr1 = arr.filter(v => v > 4);
console.log(arr1);

/**
 * foreach 无法break，return无效
 */
console.log('-------------forEach--------------');
let arr2 = arr.forEach((currentValue, index, arr) => {
    console.log(currentValue, index);
});
console.log(arr2);


console.log('-------------for in--------------');
for (let i in arr) {
    console.log(i)
    console.log(arr[i])
}

console.log('-------------for of--------------');
for (let v in arr) {
    console.log(v)
}

console.log('-------------map--------------');
let arr3 = arr.map((item, idnex) => {
    return item * idnex
})

console.log(arr3)


console.log('-------------some--------------');
/**
 * 遍历数组，只要有一个以上的元素满足条件就返回 true，否则返回 false
 */
let someResult = arr.some((item, index) => {
    return item > 10
});
console.log(someResult);


console.log('-------------every--------------');
/**
 * 遍历数组，每一个元素都满足条件 则返回 true，否则返回 false
 */
let everyResult = arr.every((item, index) => {
    return item < 10
});
console.log(everyResult);


console.log('-------------find--------------');
/**
 *  遍历数组，返回符合条件的第一个元素，如果没有符合条件的元素则返回 undefined
 */
let findResult = arr.find((item, index) => {
    return item < 10
});
console.log(findResult);


console.log('-------------findIndex--------------');
/**
 *  遍历数组，返回符合条件的第一个元素的索引，如果没有符合条件的元素则返回 -1
 */
let findIndexResult = arr.findIndex((item, index) => {
    return item === 10
});
console.log(findIndexResult);