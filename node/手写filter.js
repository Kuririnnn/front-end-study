Array.prototype.filter = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this is null or undefined');
    }
    if (typeof callback != 'function') {
        throw new TypeError(callback + 'is not a function');
    }
    const res = [];
    // 让O成为回调函数的对象传递（强制对象转换）
    const O = Object(this);
    // >>>0 保证len为number，且为正整数 
    // 位运算符
    const len = O.length >>> 0;
    for(let i = 0; i < len;  i ++) {
        if(i in O) {
            if(callback.call(thisArg, O[i], i, O)){
                res.push(O[i])
            }
        }
    }
    return res;
}