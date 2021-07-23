

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

var a = ["A", 'B', 'C'];
console.log('for of  stat begins');
a.name ='jack';
console.log(a.length);
for (var arr_val of a) {
    console.log(arr_val);
}

console.log('for in stat begins');
console.log(a.length);
for (var arr_val in a) {
    console.log(a[arr_val]);
}