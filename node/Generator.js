// 普通函数
function foo() {
    return 'hello world';
}

console.log(foo()); // 一旦调用立即执行

// Generator函数
function* generator() {
    yield 'status onde'; // yield表达式是暂停执行的标记
    return 'hello world';
}

let iterator = generator(); // 调用generator函数，函数并没有执行，而是返回一个Iterator对象
console.log(iterator.next()); // {value: "status one", done: false}，value 表示返回值，done 表示遍历还没有结束
console.log(iterator.next()); // {value: "hello world", done: true}，value 表示返回值，done 表示遍历结束
console.log(iterator.next()); // { value: undefined, done: true }

console.log('------------------------------------------');

// Generator 函数里面调用另一个 Generator 函数，默认下是没有效果的
function* fun1() {
    yield 'aaa';
    yield 'bbb';
}

function* fun2() {
    fun1();
    yield 'ccc';
    yield 'ddd';
}

let iterator1 = fun2();
for (let value of iterator1) {
    console.log(value);
}

console.log('------------------------------------------');

// yield* 表达式用来在一个 Generator 函数里面 执行 另一个 Generator 函数
function* fun3() {
    yield* fun1();
    yield 'ccc';
    yield 'ddd';
}
let iterator2 = fun3();
for (let value of iterator2) {
    console.log(value);
}

console.log('------------------------------------------');

// 应用
// 1.抽奖应用
// 具体抽奖逻辑的方法
function draw(count) {
    // 执行一段抽奖逻辑
    // ...

    console.log(`剩余${count}次`)
}

// 执行抽奖的方法
function* remain(count) {
    while (count > 0) {
        count--
        yield draw(count)
    }
}

let startDrawing = remain(6)

let btn = document.createElement('button')
btn.id = 'start'
btn.textContent = '开始抽奖'
document.body.appendChild(btn)

document.getElementById('start').addEventListener('click', function () {
    startDrawing.next()
}, false)

// 2.长轮询
// 请求的方法
function* ajax() {
    yield new Promise((resolve, reject) => {
        // 此处用一个定时器来模拟请求数据的耗时，并约定当返回的json中code为0表示有新数据更新
        setTimeout(() => {
            resolve({ code: 0 })
        }, 200)
    })
}

// 长轮询的方法
function update() {
    let promise = ajax().next().value    // 返回的对象的value属性是一个 Promise 实例对象
    promise.then(res => {
        if (res.code != 0) {
            setTimeout(() => {
                console.log('2秒后继续查询.....')
                update()
            }, 2000)
        } else {
            console.log(res)
        }
    })
}

update()