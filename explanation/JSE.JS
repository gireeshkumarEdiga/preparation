// ptomises

const res = require("express/lib/response");

//let value = Promise(function(resolve, reject))


// let count = 0

// let countValue = new Promise(function(resolve,reject){
//     if(count){
//         resolve("the is a count value")
//     }else{
//         reject("there is no count value");
//     }
// })

// console.log(countValue);


//promises chaining

// 1.then()
// 2.catch()
// 4.finally()

//1.then

// let count = new Promise(function(resolve,reject){
//     resolve("promises resolved");
// })

// count
// .then(function success(result){
//     console.log(result);
// })
// .catch(function error(result){
//     console.log(result);
// })

//2.catch()

// let count = new Promise(function(resolve,reject){
//     reject("promises rejected");
// })

// count
// .then(function success(result){
//     console.log("result");
// })
// .catch(function error(result){
//     console.log("erroe");
// })


//3.finally()

// var count = new Promise(function(resolve,reject){
//     reject("promises rejected");
// })

// count
// .finally(function succes(){
//     console.log("happy")
// })


// function greet(){
//     let name = "girish";
//     function displayname(){
//         return "hi"+" "+name;
//     }
//     return displayname;
// }
// const g = greet();
// console.log(g());


// function calculate(x){
//     function multiple(y){
//         return x+y;
//     }
//     return multiple;
// }

// const mult = calculate(9);
// console.log(mult(7));


//1. map

// var array = [10,20,30];

// var arr = array.map((element) => element+10);

// console.log(arr);


//2. forEach

// var array = [1,2,3,4,5,6];

// var num = [];

// var arr = array.forEach((elem) => {
//     elem*=10;
//     elem+=1;
//     num.push(elem);
// })

// console.log(arr);
// console.log(num);


// 3. filter

// var array = [{name:"girish",age:"23",gender:"male"},{name:"mahi",age:"23",gender:"female"},{name:"lakshmi",age:"22",gender:"female"}]

// var arr = array.filter((elem) => elem.name === "girish")

// console.log(arr);


// 4. reduce()


// const array = [100,200,300,400];

// var arr = array.reduce((elem,ind) => elem+ind);

// console.log(arr);