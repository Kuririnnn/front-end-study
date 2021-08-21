ES6
类
模块化
箭头函数
函数参数默认值
模板字符串
解构赋值
扩展操作符
对象属性简写
Promise
let 与 const


ES7
Array.prototype.includes()
指数操作符



ES8
async/await
Object.values()
Object.entries()
String padding: padStart()和padEnd()，填充字符串达到当前长度
Object.getOwnPropertyDescriptors()
函数参数列表结尾允许逗号
SharedArrayBuffer对象
Atomics对象

js
    1.在比较相等性，原始类型通过它们的值进行比较，而对象通过它们的引用进行比较。JavaScript检查对象是否具有对内存中相同位置的引用。
    2.所有对象键（不包括Symbol）都会被存储为字符串，即使你没给定字符串类型的键。
    3.如果对象有两个具有相同名称的键，则将替前面的键。它仍将处于第一个位置，但具有最后指定的值。
    4.call和bind，可以传递我们想要this关键字引用的对象。但是，.call方法会立即执行！.bind方法会返回函数的拷贝值，但带有绑定的上下文！它不会立即执行。
    5.只有7种内置类型：null，undefined，boolean，number，string，object和symbol。function不是一个类型，因为函数是对象，它的类型是object。
    6.JavaScript中只有6个假值：undefined/null/NaN/0/'' (empty string)/false，函数构造函数，如new Number和new Boolean都是真值。
    7.JavaScript只有原始类型和对象。
    8.JS中的堆和栈
        栈（stack）：队列优先，先进先出，自动分配内存空间，会自动释放，存放基本类型，简单的数据段，占据固定的空间大小（基本类型：String，Number，Boolean，Null，Undefined）
        堆（heap）：先进后出，动态分配的内存，大小不定不会自动释放，存放引用类型，指那些可能有多个值构成的对象，保存在堆内存中，包含引用类型的变量，实际上存的不是变量本身，而是指向该对象的指针（引用类型：function，Array，Object）
        如果用=某个对象的方式直接赋值，实际上赋值的是指向该对象的指针内容，由此引发深浅拷贝问题。
react

html

css
    1.子div设置margin时父组件会随之移动。
        原理：一个盒子如果没有上补白(padding-top)和上边框(border-top)，那么这个盒子的上边距会和其内部文档流中的第一个子元素的上边距重叠。

cookie、session、localStorage等
    1.localStorage没有时间限制，大小限制5M，可通过setItem/getItem/removeItem/clear操作

http（请求、请求返回、状态码等）

基本算法

设计模式

性能优化

项目相关

前台踩过的坑

nodejs

express

ts

模块化
    AMD、CMD、CommonJS、ES6

docker

eslint

Jenkins

web安全

