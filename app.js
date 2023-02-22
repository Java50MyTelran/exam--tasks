// console.log(a);
// var a = 10;
// var a = 100;
// var a = 1000;
// console.log(a);
//keyword var defines variable common in all parts of JS
function f(a) {
    console.log(a, this.a);
}
 //let b = 20;
// setTimeout(f.bind({a:"Hello"}, b), 1000);
// f.call({a: "World"}, b)
//f.bind({a:"Hello"}, b);
//setTimeout(() => f.call({a: "World"}, b), 1000)
// function getId() {
//     return new Promise(resolve => {
//         setTimeout(()=>resolve(100), 1000);
//     })
// }
// function getUserName() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("user123"), 500);
//     })
// }
//1. scenario - we should get id and only after that we get username
// async function f1() {
//     const id = await getId();
// console.log(id);
// const username = await getUserName();
// console.log(username)
// }
// f1()
// getId().then(id =>{ console.log(id)
// return getUserName()}).then(username => console.log(username))
//2. scenario simultanious performing getId and getUserName
// const promiseId = getId();
// const promiseUser = getUserName();
// Promise.all([promiseId, promiseUser])
// .then(idUser => console.log(`id: ${idUser[0]}, username: ${idUser[1]} `))
// 
//3. scenario there will be considered only one result from promise moving in resolved state first
// const promiseId = getId();
//  const promiseUser = getUserName();
// Promise.race([promiseId, promiseUser]).then(res => console.log(res, typeof res))
// for (var i = 0; i < 3; i++) {
//     setTimeout(() =>{ 
//         console.log(i)
//     }, 1);
//   }
// for (let i = 0; i < 3; i++) {
//         setTimeout(() =>{ 
//             console.log(i)
//         }, 1);
//       }
// function getAge() {
//     "use strict";
//     age = 21;
//     console.log(age);
    
//   }
// getAge();  
// let person = { name: "Lydia" };
// const members = [person];
// person = null;

// console.log(members);
// const a = {};
// const b = { key: "b" , toString: function() {return "b"}};
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);
//let a = 2;
// function greeting() {
//     throw "Hello world!";
//   }
  
//   function sayHi() {
//       const data = greeting();
//       console.log("It worked!", data);
 
//   }
  
//   sayHi();
  
// function sum(num1, num2=40) {
//     console.log(num1 + num2)
//   }
  
//   sum(10)
//  async function getData() {
//   return 'I made it!';
// }

//  (async () => {const data = await getData()/*.then(data => console.log(data))*/;
// console.log(data)})()
// const myPromise = () => Promise.resolve('I have resolved!');

// async function firstFunction() {
//   console.log(await myPromise(), 100);
//   console.log('second 101');
  
// }

// async function secondFunction() {
//   console.log(await myPromise(), 105);
//   console.log('second 106');
//   console.log('second 107');
// }

// firstFunction();
// secondFunction();
class Deferred {
    constructor(){
        this.functions = [];
    }
    then(func){
        this.functions.push(func);
    }
    resolve(res){
        for(let i = 0; i <this.functions.length; i++) {
            res = this.functions[i](res);
        }
    }
}
  
const d = new Deferred()
d.then(function(res){ console.log("1 ", res); return "a"; });

d.then(function(res){ console.log("2 ", res); return "b"; });

d.then(function(res){ console.log("3 ", res); return "c"; });
d.resolve('hello');
