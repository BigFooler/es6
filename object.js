/**
 * 对象简洁写法
 */
let name = 'qbj';
let age = 27;
let json = {
    name,
    age,
    work: true
}

/**
 * Object.is() 检测是否相等,可检测NaN
 */
let isEqual = Object.is(+0,-0);
console.log(isEqual)

/**
 * Object.assign({target},{source},{}) 合并对象
 */
let kyeObjOne = {
    name,
    age: 15,
    job: 'FE'
}
let kyeObjTwo = Object.assign({},json, kyeObjOne);
console.log(kyeObjTwo,json)

/**
 * Object.keys(),Object.values(),Object.entrys() 对象的扩展运算...
 * 
 */
let restJson = {
    a:1,
    b:2
}
let restNewJson = {...restJson};
console.log(restNewJson)

/**
 * Object.keys(obj) return []
 */

let keyObj = {
    name: 'qb',
    age: 27,
    [Symbol()]:18,
    [Symbol()]: 23
}
let keysArray = Object.keys(keyObj)
let symbolArray = Object.getOwnPropertySymbols(keyObj)
let reflectArray = Reflect.ownKeys(keyObj)
console.log(reflectArray)

let spreadObj = {...[1,2,3]}
console.log(spreadObj)

let prototypeObj = Object.setPrototypeOf({},null)
console.log(prototypeObj)

let entryObj = Object.fromEntries([ //兼容性问题
    ["name","qbj"],
    ["age",28]
])
console.log(entryObj)