const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];

// set
const res1 = Array.from(new Set(arr));
console.log(res1);
console.log('------------------------------------');

// for循环
const unique1 = arr => {
    const res = [];
    for(let i = 0, il = arr.length; i < il; i ++){
        if(res.indexOf(arr[i]) === -1){
            res.push(arr[i]);
        }
    }
    return res;
}
const res2 = unique1(arr);
console.log(res2);
console.log('------------------------------------');

// map
const unique2 = arr => {
    const map = new Map();
    const res = [];
    for(let i = 0, il = arr.length; i < il; i ++){
        if(!map.has(arr[i])){
            map.set(arr[i], true);
            res.push(arr[i]);
        }
    }
    return res;
}
const res3 = unique2(arr);
console.log(res3);
console.log('------------------------------------');