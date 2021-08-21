let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

/**
 * object没有for of
 */
console.log('-------------for in--------------');
for(let k in obj) {
    console.log(k);
    console.log(obj[k]);
}