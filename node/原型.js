// 原型与原型链
var x = {
    a: 10
}
var y = {
    a: 20,
    b: 30
}
var z = {
    a: 40,
    b: 50,
    c: 60
}
x.__proto__ = y;
y.__proto__ = z;
console.log(x.a);
console.log(x.b);
console.log(x.c);

y.b = 70;
console.log(x.b);

delete z.c;
console.log(x.c);

// 构造函数
function C(x){
    this.x = x;
}

C.prototype.y = 30;

var a = new C(10);
var b = new C(20);

console.log(a.x);
console.log(a.y);
console.log(b.x);
console.log(b.y);

// 对象实例 a、b 的隐式原型（__proto__）指向构造该对象的构造函数 C 的显示原型（prototype）
console.log(a.__proto__ === C.prototype);
console.log(b.__proto__ === C.prototype);

// 构造函数的显示原型（prototype）的 constructor 属性指向原构造函数
console.log(C === C.prototype.constructor);

// 构造函数 C、Function 与 Object 的隐式原型（__proto__）指向构造该对象的构造函数 Function 的显示原型（prototype）
console.log(C.__proto__ === Function.prototype) // true
console.log(Function.__proto__ === Function.prototype) // true
console.log(Object.__proto__ === Function.prototype) // true

// C.prototype 与 Function.prototype 的隐式原型（__proto__）指向构造该对象的构造函数 Object 的显示原型（prototype）
console.log(C.prototype.__proto__ === Object.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true

// Object.prototype 的隐式原型（__proto__）等于 null
console.log(Object.prototype.__proto__ === null) // true