/**
 * @desc promise解决回调问题 promise.all().then() 所有的promise完成，promise.race().then()只要有 一个完成
 */
let a = 10;
let promise = new Promise((resolve, reject)=>{
    if (Object.is(a,10)){
        resolve('成功')
    } else {
        reject('失败...')
    }
})
promise.then( res => {
    console.log(res)
}).catch(err=>{
    console.log(err)
})