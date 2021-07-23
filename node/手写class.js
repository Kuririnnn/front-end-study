// es5的构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(`${this.name},run`);
    }
}

Person.prototype.toString = function () {
    return `(${this.name},${this.age})`;
}

// 静态方法
Person.staticWork = function () {
    console.log('静态方法在工作');
}

Person.prototype.sex = '男';
Person.prototype.work = function () {
    console.log(`${this.name}，work`);
}

// 继承
function Child(name, age) {
    Person.call(this, name, age);
}
Child.prototype = new Person();
var littleGuy = new Child('Tom', 6);
console.log(littleGuy.name);
console.log(littleGuy.toString());
littleGuy.run();
console.log(littleGuy.sex);
littleGuy.work();



var p = new Person('K', 26);
console.log(p.toString());

// es6 class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `(${this.name},${this.age})`;
    }
}
console.log(typeof PersonClass);
var p1 = new PersonClass('L', 27);
console.log(typeof p1);
console.log(p1.toString());