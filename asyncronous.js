//setTimeout


// function greet(){
//     console.log("Hello world");
// }

// var res = setTimeout(greet,3000);
// console.log("id"+res);

// console.log("gireesh")



//clearTimeout()


// let count=0;

// function increasecount(){
//     while(count<=10){
//         // if(count===5){
//         //     var id=setTimeout(increasecount,5000);
//         //     clearTimeout(id);
//         // }
//         console.log(count);
//         count++;
//     }
// }

// setTimeout(increasecount, 3000);

// // clearTimeout(id);

// console.log("setTimeout is stopped");



// function friendship(first_name,last_name){
//     console.log("hello "+first_name+" "+last_name);

// }
// setTimeout(friendship, 3000, "mahi","komme");



//CALLBACK FUNCTION


// function greet(name){
//     console.log("hi "+name);
// }

// greet("girish");

// function greet(name, callback){
//     console.log("Hi"+" "+name);
//     callback();
// }

// function callme(){
//     console.log("I am calling back");
// }

// greet("mahi", callme);



//Promise

//javascript Promise

//const count = true;

//let countValue = new Promise(function(resolve, reject){
    //if(count){
        //resolve("There is a count value.")
        // reject("There is no count value");
    //} 
    // else {
    //     reject("There is no count value");
    //     // resolve("There is a count value.")
    // }
//});

//console.log(countValue);



//async/await

// async function example

// async function f(){
//     console.log("ASYNC FUNCTION");
//     return Promise.resolve(100);
// }

// f().then(function(result){
//     console.log(result);
// });

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve("promise resolved")},4000);
// });

// async function asyncFunc(){
//     let result = await promise;

//     console.log(result);
//     console.log("hello");
// }

// asyncFunc();



//a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

//async function
// async function asyncFunc() {
//     try {
//         // wait until the promise resolves 
//         let result = await promise; 

//         console.log(result);
//     }   
//     catch(error) {
//         console.log(error);
//     }
// }

// // calling the async function
// asyncFunc(); // Promise resolved


//setInterval();

// program to display a text using setInterval method
// function greet() {
//     console.log('Hello world');
// }

// setInterval(greet, 1000);


//clearInterval();

// let count=0;

// let interval = setInterval(function(){

//     count+=1;

//     if(count===5){
//         clearInterval(interval);
//     }

//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);
// },2000);