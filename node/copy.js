var obj = {
    a: '1',
    b: '2'
};

// var b = Object.assign(obj);
var b = {...obj};
console.log(b);

// setTimeout(() => {
//     b.b = '3';
//     console.log(obj);
// }, 3000);

setTimeout(() => {
    obj.b = '3';
    console.log(b);
}, 3000);