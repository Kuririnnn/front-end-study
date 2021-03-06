/**
 *  首先浏览器执行js进入第一个宏任务进入主线程, 直接打印console.log('1')

• 遇到 setTimeout  分发到宏任务Event Queue中

• 遇到 process.nextTick 丢到微任务Event Queue中

• 遇到 Promise， new Promise 直接执行 输出 console.log('7');

• 执行then 被分发到微任务Event Queue中

•第一轮宏任务执行结束，开始执行微任务 打印 6,8

•第一轮微任务执行完毕，执行第二轮宏事件，执行setTimeout

•先执行主线程宏任务，在执行微任务，打印'2,4,3,5'

•在执行第二个setTimeout,同理打印 ‘9,11,10,12’

•整段代码，共进行了三次事件循环，完整的输出为1，7，6，8，2，4，3，5，9，11，10，12。

以上是在浏览器环境下执行的数据，只作为宏任务和微任务的分析，我在node环境下测试打印出来的顺序为：1，7，6，8，2，4，9，11，3，10，5，12。node环境执行结果和浏览器执行结果不一致的原因是：浏览器的Event loop是在HTML5中定义的规范，而node中则由libuv库实现。libuv库流程大体分为6个阶段：timers，I/O callbacks，idle、prepare，poll，check，close callbacks，和浏览器的microtask，macrotask那一套有区别。
 */
//主线程直接执行

console.log('1');

//丢到宏事件队列中

setTimeout(function() {

    console.log('2');

    process.nextTick(function() {

        console.log('3');

    })

    new Promise(function(resolve) {

        console.log('4');

        resolve();

    }).then(function() {

        console.log('5')

    })

})

//微事件1

process.nextTick(function() {

    console.log('6');

})

//主线程直接执行

new Promise(function(resolve) {

    console.log('7');

    resolve();

}).then(function() {

    //微事件2

    console.log('8')

})

//丢到宏事件队列中

setTimeout(function() {

    console.log('9');

    process.nextTick(function() {

        console.log('10');

    })

    new Promise(function(resolve) {

        console.log('11');

        resolve();

    }).then(function() {

        console.log('12')

    })

})