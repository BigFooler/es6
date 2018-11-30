let max = Math.max(...[1,23,4,5]);
console.log(max)

let arr1 = ["22",12,'qbj'];
let arr2 = [...arr1];
arr2[1] = "12";
console.log(arr1,arr2)

let [a,...rest] = ["na",23,4,'String'];
console.log(a,rest)
console.log([..."hello"])
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length:3
};
console.log(Array.from(arrayLike))

let v = [1,2,3,4].find((v)=>{
    return v > 3
})
console.log(v)