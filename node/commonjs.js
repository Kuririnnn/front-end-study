// exports.a = 2;
// module.exports.b = 3;
 
// console.log(module); //{ a: 2, b: 3 }
// console.log(module.exports); //{ a: 2, b: 3 }
// console.log(exports); // { a: 2, b: 3 }
// console.log(exports === module.exports); // true

// 　exports和module.exports 不管谁被重新赋值，他们的关联关系都会断掉。模块最终return出去的是module.exports；

exports.a = 2;
module.exports = {"b": 3};   // moudle.exports 被重新指向新的内存，它与exports的关联关系断开
console.log(module.exports);  // { b: 3 }
console.log(exports);  // { a: 2 }
console.log(exports === module.exports);  // false