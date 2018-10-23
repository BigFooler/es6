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