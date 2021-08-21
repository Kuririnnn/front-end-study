

// let date = new Date()
// let diff = getMinutesDiff(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
//     new Date())
// function getMinutesDiff(startDateTime, endDateTime) {
//     //时间差的毫秒数
//     let millsDiff = new Date(endDateTime).getTime() - new Date(startDateTime).getTime();
//     console.log(new Date(startDateTime));
//     console.log(new Date(startDateTime).getTime());
//     return parseInt(millsDiff / (60 * 1000))
// }

// console.log(diff);

// function getTwiceTime (timeSplit=5) {
//     let timeList = []
//     let dayTime = 24
//     let minute = 60
//     // let timeSplit = window.granularity
//     for (let i = 0; i < dayTime; i++) {
//       for (let j = 0; j < minute; j++) {
//         if (j % timeSplit == 0) {
//           if (i < 10 && j < 10) {
//             timeList.push('0' + i + ':' + '0' + j)
//           } else if (i < 10 && j >= 10) {
//             timeList.push('0' + i + ':' + j)
//           } else if (i >= 10 && j < 10) {
//             timeList.push(i + ':' + '0' + j)
//           } else {
//             timeList.push(i + ':' + j)
//           }
//         }
//       }
//     }
//     timeList.shift()
//     timeList.push("24:00")
//     return timeList
//   }


//   let times = getTwiceTime();

//   console.log(times)

//   for (let key in  times){

//     let minutes = (key * 1 + 1) * 5

//     if( minutes <= diff){
//         console.log(minutes);
//     }
//   }


// function A(){
//   setTimeout(() => {}, 1000);
//   return 1;
// }
// var a = new A();
// console.log(a);
// var aa = A();
// console.log(aa);

// function B(v){
//   this.v = v;
// }
// var b = new B(1);
// console.log(b);


// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;



// var num = 8;
// var num = 10;

// console.log(num);



// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

// console.log(() => 0);
// console.log((() => 0)());

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);



// var a = [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2]
// );
// console.log(a);


// console.log([..."Lydia"]);

// var a = ["A", 'B', 'C'];
// console.log('for of  stat begins');
// a.name ='jack';
// console.log(a.length);
// for (var arr_val of a) {
//     console.log(arr_val);
// }

// console.log('for in stat begins');
// console.log(a.length);
// for (var arr_val in a) {
//     console.log(a[arr_val]);
// }

// function add(a, b) {
//     console.log(a + b)
// }
// add('b' + 'a', + 'a' + 'a');

// var a = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 4
//         }
//     }
// }

// var b = a;
// console.log(b);
// a.b.d.f = 6;
// console.log(b);


// var c = [1, 2, 3, 4, 5]
// var d = c;
// console.log(d);
// c.push(6);
// console.log(d);

// var e = function (v) {
//     console.log(v);
// }
// var f = e;
// console.log(f.toString());
// console.log(f);
// e = function (v1, v2) {
//     console.log(v1, v2);
// }
// console.log(f.toString());
// console.log(f);
// console.log(e.toString());


// let a = 6;
// let b = 9;
// function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
//     console.log(strings);
//     console.log(aValExpression);
//     console.log(bValExpression);
//     console.log(sumExpression);
//     return 'foobar';
// }
// let untaggedResult = `${a} + ${b} = ${a + b}`;
// let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;


// let s1 = Symbol('foo'),
//         s2 = Symbol('bar');
//     let o = {
//       [s1]: 'foo val',
//       [s2]: 'bar val',
//       baz: 'baz val',
//       qux: 'qux val'
// };
//     console.log(Object.getOwnPropertySymbols(o));
//     // [Symbol(foo), Symbol(bar)]
//     console.log(Object.getOwnPropertyNames(o));
//     // ["baz", "qux"]
//     console.log(Object.getOwnPropertyDescriptors(o));
//     // {baz: {...}, qux: {...}, Symbol(foo): {...}, Symbol(bar): {...}}
//     console.log(Reflect.ownKeys(o));
//     // ["baz", "qux", Symbol(foo), Symbol(bar)]

// let i = 1;
// do {
//     i += 2;
//     console.log(i);
//   } while (i < 10);

// let a = {a: 1}
// function test(v) {
//     setTimeout(() => {
//         console.log(v.a);
//     },3000);
// }
// test(a);
// a.a = 2;


// let xiaohong = {
//     name: "小红",
//     age: 15
//   };
//   xiaohong = new Proxy(xiaohong, {
//     get(target, key) {
//       let result = target[key];
//       //如果是获取 年龄 属性，则添加 岁字
//       if (key === "age") result += "岁";
//       return result;
//     },
//     set(target, key, value) {
//       if (key === "age" && typeof value !== "number") {
//         throw Error("age字段必须为Number类型");
//       }
//       return Reflect.set(target, key, value);
//     }
//   });
//   console.log(`我叫${xiaohong.name}  我今年${xiaohong.age}了`);
//   xiaohong.age = "aa";


String.prototype.colorRgb = function () {
  // 16进制颜色值的正则
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 把颜色值变成小写
  var color = this.toLowerCase();
  if (reg.test(color)) {
      // 如果只有三位的值，需变成六位，如：#fff => #ffffff
      if (color.length === 4) {
          var colorNew = "#";
          for (var i = 1; i < 4; i += 1) {
              colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
          }
          color = colorNew;
      }
      // 处理六位的颜色值，转为RGB
      var colorChange = [];
      for (var i = 1; i < 7; i += 2) {
          colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
      }
      return "RGB(" + colorChange.join(",") + ")";
  } else {
      return color;
  }
}

console.log('#0FCBA2'.colorRgb());