js
    1.在比较相等性，原始类型通过它们的值进行比较，而对象通过它们的引用进行比较。JavaScript检查对象是否具有对内存中相同位置的引用。
    2.所有对象键（不包括Symbol）都会被存储为字符串，即使你没给定字符串类型的键。
    3.如果对象有两个具有相同名称的键，则将替前面的键。它仍将处于第一个位置，但具有最后指定的值。
    4.call和bind，可以传递我们想要this关键字引用的对象。但是，.call方法会立即执行！.bind方法会返回函数的拷贝值，但带有绑定的上下文！它不会立即执行。
    5.只有7种内置类型：null，undefined，boolean，number，string，object和symbol。function不是一个类型，因为函数是对象，它的类型是object。
    6.JavaScript中只有6个假值：undefined/null/NaN/0/'' (empty string)/false，函数构造函数，如new Number和new Boolean都是真值。
    7.JavaScript只有原始类型和对象。
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