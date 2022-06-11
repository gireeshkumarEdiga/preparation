// {
//     const number = 10;
    
// }

// const number = 12;
// number = 20;
// console.log(number);

// function test(num1,num2){
//     console.log("hello world");
//     return num1+num2;
// }
// let sum=test(10,20);
// console.log(sum);


// const test = () =>{
//     console.log("Hello");
// } 

// test();

// const test = (num) => num+10;
// let sum = test(10);
// console.log(sum);


// class test{
//     constructor(num1,num2){
//         this.num1 = num1;
//         this.num2 = num2;
//         //console.log("i am from constructor");
//     }
//     addition(){
//         console.log(this.num1+this.num2);
//     }
// }
// //new test(10,20).addition();
// let obj = new test(10,20);
// obj.addition();


// const person = {
//     name : "girish",
//     age : 22,
//     email : "egireeshkumar99@gmail.com"
// }

// //console.log(person.age)

// const {name,age,email} = person;
// console.log(name);


// var arr1 = [10,20,30,40];
// var arr2 = [50,60,70];

// var arr3 =[...arr1,...arr2];
// console.log(arr3);


// var obj1 = {
//     name : "girish"
// }
// var obj2 = {
//     //...obj1,
//     age : 22,
//     email : "egireeshkumar99@gmail.com",
// }

// var obj3 = {
//     obj1,
//     obj2,
// }

// console.log(obj3);


var array = [10,20,30,40,50]

//array.map((element)=> console.log(element));

let filtered = array.filter((element)=> element>20);
filtered.map((element)=> console.log(element));
//console.log(filtered);

