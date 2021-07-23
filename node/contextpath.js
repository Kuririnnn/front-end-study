let a = 11;
function test1() {
    this.a = 22;
    console.log(this);
    let b = () => {
        console.log(this);
        console.log(this.a);
    }
    b();
}
function test2() {
    this.a = 2;
    console.log(this);
    let b = function () {
        console.log(this);
        console.log(this.a);
    }
    b();
}

function test3() {
    this.a = 22;
    console.log(this);
    function c() {
        console.log(this);
        console.log(this.a);
    }
    c();
}

console.log('test1');
let x = new test1();
test1();
console.log('test2');
let y = new test2();
test2();
console.log('test3');
let z = new test3();
test3();