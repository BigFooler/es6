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

### 对象
- 属性名表达式
```
let key = "foo"
let obj = {
    [key]: true
}
```
- 属性遍历 5种方法
- for...in 遍历自身和继承的可枚举属性（不包含Symbol属性）
- Object.keys(obj) 返回一个数组，包括对象自身的（不包含继承的）所有可枚举属性（不包含Symbol属性）的键名
- Object.getOwnPropertyNames(obj) 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名
- Object.getOwnPropertySymbols(obj) 返回一个数组，包含对象自身的所有 Symbol 属性的键名
- Reflect.ownKeys(obj) 返回一个数组，包含所有键名

- super关键字 指向当前对象的原型对象，只能用在对象的方法中
- 对象的扩展运算（...）
- 合并两个对象 `let obj = {...obj1, ...obj2}`

### 对象新增的方法
- Object.is() 比较两个值是否相等
- Object.assign(target, source1, source2) 将源对象（source）的所有可枚举属性，复制到目标对象（target）
-  `Object.assign([1,2,3],[4,5]) //[4,5,3]`
```
Object.assign(obj.prototype,{ //为对象添加方法
    method1(){

    },
    method2(){

    }
})
```
- Object.getOwnPropertyDescriptors(obj) //返回对象所有自身属性（非继承属性）的描述对象
- Object.setPrototypeOf(obj,prototypeObj) //设置obj的原型对象为prototypeObj 返回obj自身
- Object.getPrototypeOf(obj) //返回obj的原型对象
- Object.keys()
- Object.values()
- Object.entries()
- Object.fromEntries() //将一个键值对数组转为对象
```
Object.fromEntries([
    ["name","bar"],
    ["age",28]
])
// {
    name:"bar",
    age: 28
}
```

### Set 新的数据结构
- 类似于数组，但是没有重复的值 
```
[...new Set(array)] //出去重复值
```

### Map 
- 类似于对象，但是可以使用任何类型的值作为键

### Reflect对象
- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
- Reflect.set(target, name, value, receiver)
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)

### export 
- `export const a = 1`

### es6编程风格
- let 取代var
- `let [a,b,c] = [1,3,4]`
- 静态字符串一律使用单引号或者反引号，不要使用双引号
```
const arr = [1,23,,3,4]
const [one, second] = arr
//单行定义的对象末尾不使用逗号，多行定义的对象末尾使用逗号
const a = { k1: v1, k2: v2 };
const b = {
  k1: v1,
  k2: v2,
};
```
- 