//functional programming

// let subject = function(){
//     return "Higher Order Functions";
// }

// let name = () =>"girish";

// function a(b){
//     b();
//     return function(name){
//         console.log("output from A "+name);
//     };
// }
// function b(){
//     console.log("output from b");
// }
// const c = a(b);
// c("girishkumar");
// console.log(name());
// console.log(subject());



//first class function

// let add = num => num+1;

// function numbers(fn,x){
//     return fn(x);
// }
// let result = numbers(add,5);
// console.log(result);

// let numbers = [1,2,3,4];
// //let output = numbers.map((element,index,array)=>element+1);
// let output = numbers.map(add);
// console.log(output);



// how functions are objects ?

// let user = { name : "girish"};
// user.profession = "student";
// console.log(user);

// function sayhello(){
//     console.log("Hello");
// }
// sayhello.age = 22;
// console.log(sayhello.age);



// map()

// let num = [10,20,30];

// let output=num.map((element) =>{ element*=10; element+=1; return element })
// console.log(output);
// console.log(num);

//const users = [{name:"girish"},{name :"mahi"},{name:"lakshmi"}]
// const output = [];
// for(var i=0; i<users.length; i++){
//     users[i].profession="full stack web developer";
//     output.push(users[i]);
// }
// console.log(output);

// let output = users.map((element)=> {element.profession = "full stack web developer"; return element;})
// console.log(output);



// forEach

// let numbers = [1,2,3,4,5];

// const result = [];

// numbers.forEach((element, index,array) =>{
//     element = element+1;
//     result.push(element);
// });
// console.log(result);
// console.log(numbers);

// let numbers = [1,2,3,4,5];

// //forEach doesn't return the output;
// var result = numbers.forEach((element, index,array) =>{
//     element = element+1;
//     return element;
// });
// console.log(result);
// console.log(numbers);



// filter() 

// const users = [{name:"girish",age:22},{name :"mahi",age:22},{name:"lakshmi",age:22}];

// let filteredUser = users.filter((user)=> user.name ==="mahi");
// console.log(filteredUser);
// console.log(users);



//find

// let numbers = [1,2,3,2,1,3];

// let result = numbers.find((user)=> user===3);
// console.log(result);



// findIndex

// let numbers = [1,2,3,2,1];

// let result = numbers.findIndex((user)=> user===1);
// console.log(result);


// const arr = [1,2,3,4,5];

// const sum = arr.reduce((a,cv) => {
//     return a+cv;
// });
// console.log(sum);