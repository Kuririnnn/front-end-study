var user = {
    age: 10,
    info: {
        age: 11
    },
    getAge: function() {
        return this.age;
    }
}

var age = user?.info?.getAge?.();

var age1 = user?.getAge?.();

console.log(age);
console.log(age1);