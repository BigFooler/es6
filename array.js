let max = Math.max(...[1,23,4,5]);
console.log(max)

let arr1 = ["22",12,'qbj'];
let arr2 = [...arr1];
arr2[1] = "12";
console.log(arr1,arr2)

let [a,...rest] = ["na",23,4,'String'];
console.log(a,rest)
console.log([..."hello"])