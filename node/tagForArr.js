//算法题，找出数组里面任意两个数相加等于某个k值的组合
// 如果是查找值相加的组合可以先用排序，如果是查找角标的话我认为不能用排序
//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function f(arr, target) {
    const a = arr.slice().sort((a, b) => a - b);
    const len = a.length;
    const key = [];//存放最后的元素组
    const val = [];//存放最后的下标组
    if (len <= 1) return;
    let i = 0;
    let j = len - 1;
    while (i < j) {
        if (a[i] + a[j] < target) {
            i++
        } else if (a[i] + a[j] > target) {
            j--
        } else {
            val.push([a[i], a[j]])
            key.push([i, j])
            i++; j--;
        }
    }
    // 如果只要下标组，则：return key;
    return key
}

// 上面的算法实现需要排序数组，下面介绍一个不用排序的算法
function findNum2(arr, target) {
    const len = arr.length;
    const key = [];//存放最后的元素组
    const val = [];//存放最后的下标组
    if (len <= 1) return;
    for (let i = 0; i < len; i++) {
        const diff = target - arr[i];
        // 从i+1开始查询是否存在diff的值（下标）
        const index = arr.slice(i + 1).findIndex(i => i === diff);
        if (index !== -1) {
            key.push([i, index]);
            val.push([arr[i], arr[index]]);
        }
    }
    // 如果只要下标组，则：return key;
    return key
}
// function findNum2(arr, target) {
//     let key = [];
//     for (let i = 0, il = arr.length; i < il; i++) {
//         for (let j = i, jl = arr.length; j < jl; j++) {
//             if (i !== j && arr[i] + arr[j] === target) {
//                 key.push([i, j]);
//             }
//         }
//     }
//     return key;
// }

function findNum3(arr, target) {
    let key = [];
    for (let i = 0, il = arr.length; i < il; i++) {
        let num = target - arr[i];
        const index = arr.indexOf(num);
        if (num !== -1 && index > i) {
            key.push([i, num]);
        }
    }
    return key;
}
let arr = [];
for (let i = 0; i < 10000; i++) {
    arr.push(randomNum(1, 1000));
}
const target = 11;
const time1 = new Date().getTime();
console.log(f(arr, target))
console.log(f(arr, target).length)
const time2 = new Date().getTime();
console.log(findNum2(arr, target))
console.log(findNum2(arr, target).length)
const time3 = new Date().getTime();
// console.log(findNum3(arr, target).length)
const time4 = new Date().getTime();

console.log(`方法一的执行时间${time2 - time1}`);
console.log(`方法二的执行时间${time3 - time2}`);
console.log(`方法二的执行时间${time4 - time3}`);
