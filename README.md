# es6

###  es6变量声明方式
- let 声明块级变量
- const 声明只读常量
- var
- function
- import
- class 

### 变量的解构赋值
- 解构不成功，变量的值就等于undefined
- 默认值，只有严格等于undefined 默认值才生效 `let [a = 1] = [null] //a=null`

### 解构赋值的应用
- 交换值:
```
let x = 1;
let y = 2;
[x,y] = [y,x]
```
- 函数返回多个值:
```
function demo(){
    return {
        foo:1,
        bar: 2
    }
}
let {foo,bar} = demo();
```
- 提取json数据
let {a,b,c} = obj;

### 字符串
- 遍历 for of 
- includes/startWidth/endsWidth
- padStart/padEnd `"x".padStart(4,"a")//aaax`
- 模板字符串 

### 扩展运算符 ...
- 将数组展开为逗号分割的序列 `console.log(...[1,2,3]) // 1 2 3`
- 主要应用：`funcition fun(...[arr])`
- 主要应用（复制数组）：`let arr1 = [1,2,3] ;let arr2 = [...arr1]`
- 主要应用（结构赋值）： `let [a, ...rest] = [1,2,3,4] // a 1 rest [2,3,4]`
- 主要应用（字符串）： `[..."hello"] // ["h","e","l","l","o"]`

### Array
- Array.from() 将类数组对象以及可遍历的对象转为真正的数组(有length属性的对象)
```
let arrayLike = {
    "a" : 1,
    "b" : 2,
    length:2
}
Array.from(arrayLike) // [1,2]

Array.from([1, 2, 3], (x) => x * x) // [1,4,9] //接收第二个参数 作用类似map方法
```

- Array.of() 将一组值转为数组 
```
Array.of(3,3,4) //[3,3,4]
```
- 数组实例的find方法和findIndex方法 find返回满足条件的值，没有返回undefined;findIndex返回下标没有返回-1
```
[1,2,3,4].find((v)=>{
   return  v > 3
})
// 4
```
- 数据实例的includes() 检测数组是否包含某个值 返回Boolean,第二个参数表示开始检测的位置