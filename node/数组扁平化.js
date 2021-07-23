const arr = [1, [2, [3, [4, 5]]], 6];

const res1 = arr.flat(Infinity);

console.log(res1);
console.log('------------------------------------------');

const res2 = JSON.stringify(arr).replace(/\[|]/g, '').split(',');

console.log(res2);
console.log('------------------------------------------');

const res3 = `[${JSON.stringify(arr).replace(/\[|]/g, '')}]`;
console.log(res3);
console.log(JSON.parse(res3));
console.log('------------------------------------------');

const res4 = [];
const fn = arr => {
    for(let i = 0, il = arr.length; i < il; i ++){
        if(Array.isArray(arr[i])){
            fn(arr[i]);
        }else{
            res4.push(arr[i]);
        }
    }
}
fn(arr);
console.log(res4);