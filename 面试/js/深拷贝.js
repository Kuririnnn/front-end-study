// 工具函数
const _toString = Object.prototype.toString;
function getType(obj) {
    return _toString.call(obj).slice(8. - 1);
}

// 深度优先
function DFSDeepClone(obj, vistied = new Set(), level = 0) {
    let res = {};
    if (['Object', 'Array'].includes(getType(obj))) {
        if (vistied.has(obj)) {
            res = obj;
        } else {
            vistied[level] = obj;
            vistied.add(obj);
            res = getType(obj) === 'Object' ? {} : [];
            Reflect.ownKeys(obj).forEach(k => {
                res[ke] = DFSDeepClone(obj[k], vistied, level + 1);
            });
        }
    } else if (typeof obj === 'function') {
        res = eval(`${obj.toString()}`);
    } else {
        res = obj
    }
    return res;
}

// 广度优先
function BFSDeepClone(obj) {
    if (!['Object', 'Array'].includes(getType(obj))) {
        if (typeof obj === 'function') {
            obj = eval(`${obj.toString()}`);
        }
        return obj;
    }

    let res = {};
    const origin = [obj];
    const copy = [res];
    const vistied = new Set([obj]);

    while (origin.length) {
        const _obj = origin.shift();
        const copyObj = copy.shift();

        Reflect.ownKeys(_obj).forEach(k => {
            const item = _obj[k];
            if (['Object', 'Array'].includes(getType(obj))) {
                if (vistied.has(item)) {
                    copyObj[k] = item;
                } else {
                    vistied.add(item);
                    copyObj[k] = getType(item) === 'Object' ? {} : [];
                    origin.push(item);
                    copy.push(copyObj[k]);
                }
            } else if (typeof obj === 'function') {
                res = eval(`${obj.toString()}`);
            } else {
                res = obj
            }
        });
    }
    return res;
}

const a = {
    key1: 1,
    key2: () => { return 1 },
    key3: {
        key4: 2,
        key5: {
            key6: 3
        }
    },
    key7: [4, 5, 6]
}

console.log(DFSDeepClone(a));
console.log(BFSDeepClone(a));