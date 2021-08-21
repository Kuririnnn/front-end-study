class Stack {
    data = [];
    add = (v) => {
        this.data.push(v)
    }
    get = () => {
        return this.data.pop();
    }
    getStackData = () => {
        return this.data;
    }
}

const stack = new Stack();
stack.add('v1');
console.log(stack.getStackData()); // [ 'v1' ]
stack.add('v2');
console.log(stack.getStackData()); // [ 'v1', 'v2' ]
console.log(stack.get()); // v2
console.log(stack.getStackData()); // [ 'v1' ]

class Queue {
    data = [];
    add = (v) => {
        this.data.push(v)
    }
    get = () => {
        return this.data.shift();
    }
    getStackData = () => {
        return this.data;
    }
}

const queue = new Queue();
queue.add('v1');
console.log(queue.getStackData()); // [ 'v1' ]
queue.add('v2');
console.log(queue.getStackData()); // [ 'v1', 'v2' ]
console.log(queue.get()); // v1
console.log(queue.getStackData()); // [ 'v2' ]