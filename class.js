/**
 * 类 
 */
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.show = function(){
//     console.log(this.name)
// }
// Object.assign(Person.prototype,{
//     show(){
//         console.log(this.name)
//     }
// })
// var newPerson = new Person('qbj',27);
// newPerson.show();

/**
 * es6 class class定义类不存在变量提升
 */
// const SUBMIT = "sub";
// class Person {
//     constructor(name,age) {
//        this.name = name;
//        this.age = age;
//        this.show = this.show.bind(this);
//     }
//     show(){
//         console.log(this.name)
//     }
//     [SUBMIT](){
//         console.log(232)
//     }
// }
// let p1 = new Person('qbj',18);
// let {show} = p1;
// show();
// p1.sub();

/**
 * 取值 getter 和 setter
 */
class Person{
    constructor(){
      this.aaa = 123;  
    }
    set aaa(v){
        console.log(v)
    }
    get aaa() {

    }
}
let p = new Person();
let a = p.aaa;
p.aaa = "121"