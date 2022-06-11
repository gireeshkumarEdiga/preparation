// class person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`hello ${this.name}`);
//     }
// }

const res = require("express/lib/response");

// const res = require("express/lib/response");

// const res = require("express/lib/response");
// const { set } = require("mongoose");

// const { json } = require("express/lib/response")





// class student extends person{

// }

// let student1 = new student("girish");
// //console.log(student1);
// student1.greet();



// class person {
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// class student extends person{
//     constructor(name){
//         console.log("creating student class");
//         super(name);
//         console.log(name)
//     }
// }

// let student1 = new student("kumar");
// student1.greet();



// class person {
//     constructor(name){
//         this.name = name;
//         this.occupation = "unemployee";
//     }
//     greet(){
//         console.log(`hello ${this.name}`);
//     }
// }

// class student extends person{
//     constructor(name){
//         super(name);
//         this.occupation = "student";
//     }
//     greet(){
//         console.log(`hello student ${this.name}`);
//         console.log('occupation '+this.occupation);
//     }
// }

// let p = new student("gowd");
// p.greet();




// function calculate(x) {
//     function multiple(y){
//         return x*y;
//     }
//     return multiple;
// }
// const res = calculate(3);
// console.log(res(6));


// let age = 18;
// let welcome = (age<18) ? () => console.log("adult") : () => console.log("child");
// welcome();



// let sum = (a,b) => {
//     let result = a+b;
//     return result;
// }

// console.log(sum(10,20));




// function person(){
//     this.name = "girish";
//     this.age = 23;
// }

// const person1 = new person();
// console.log(person1);


// class person {
//     constructor(){
//         this.name = "girish";
//         this.age = 22;
//     }
// }

// const student = new person();
// console.log(student);


// function person(name) {
//     this.name = name;
//     this.greet = function(){
//         return "Hi"+" "+name;
//     }
// }

// var res = new person("girishkumar");
// console.log(res.greet());


// class person {
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`hello ${this.name}`);
//     }
// }

// let person1 = new person("girish");
// console.log(person1.name);
// person1.greet();




// function greet() {
//     const string = `my name is ${this.firstname} ${this.lastname} from ${this.address}`;
//     console.log(string);
// }
// const human = {
//     firstname : "girishkumar",
//     lastname : "ediga",
//     address : "lepakshi"
// }
// greet.call(human);


// const employee = {
//     firstname : "girishkumar",
//     lastname : "ediga",
//     address : "lepakshi"
// }

// function invites(greet1,greet2){
//     console.log(greet1+" "+this.firstname+" "+this.lastname+" "+"from"+" "+this.address+" "+greet2);
// }

// var res = invites.bind(employee);
// res("Hi","How are you");



// class car {
//     constructor(name){
//         this.brand = name;
//     }
//     present() {
//         return `I have a ${this.brand}`;
//     }
// }
// class model extends car {
//     constructor(name,mod){
//         super(name);
//         this.model1 = mod;
//     }
//     show(){
//         return `${this.present()} it is a +${this.model1}`;
//     }
// }


// const mycar = new model("ford","mustang");
// console.log(mycar.show());



// var array = [5,1,3,2,6];

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }

// let output = array.map(binary);

// console.log(output);



// var array = [5,1,3,2,6];

// function isOdd(x){
//     return x%2;
// }

// const output = array.filter((x) => x>4);

// console.log(output);


// var array = [5,1,3,2,6];

// var output = array.reduce(function (acc, curr) {
//     if(acc<curr){
//         acc=curr;
//     }
//     return acc;
// });

// console.log(output);



// const users = [
//     { firstname : "girish", lastname : "ediga", age : 23},
//     { firstname : "sai", lastname : "ediga", age : 22},
//     { firstname : "chinni", lastname : "ediga", age : 18},
//     { firstname : "indu", lastname : "ediga", age : 17},
//     { firstname : "bunny", lastname : "ediga", age : 15},
//     { firstname : "mahi", lastname : "ediga", age : 23}
// ]


// const output = users.reduce(function(acc,curr){
//     if(acc[curr.age]=== undefined){
//         acc[curr.age]=1;
//     }else{
//         acc[curr.age]++;
//     }
//     return acc;
// },{})
// console.log(output);

// const output = users.filter((x) => x.age<23).map((x) => x.firstname);

// console.log(output);


// const array = (...arr) => console.log(arr);

//const array = (a,...arr) => console.log(a); 

// const array = (a,b,...arr) => console.log(b)
// array(10,20,30,40,50);

// let values = [10,20,40];
// let [a,,c] = values;
// console.log(c);


// let s1 = [1,2,23,4];
// let s2 = [6,7,8,9];
// let s3 = [...s1,...s2];
// console.log(s3);

// let s1 = {
//     name : "girish",
//     age : 22
// }

// let s2 = {
//     ...s1,
//     gender : "male"
// }

// console.log(s2);


// greet()

// function greet(){
//     x = 10;
//     console.log(x);
//     var x;
// }

// x = 5;
// console.log(x);
// var x;


// var y;
// y = 20;
// console.log(y);


// function details(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// var res = new details("girish",23,"male");
//console.log(res);

// details.prototype.address = "lepakshi";
// console.log(res.address);

// details.greet = function(){
//     console.log("lepakshi & guntakal")
// }
// details.greet();

// details.qualification = function() {
//     console.log("B.Tech")
// }

// details.qualification();


// const json2 = {
//     "name" : "girish",
//     "age" : "23",
//     "gender" : "male",
// } 

// const js =  JSON.parse(json2)
// console.log(js.age);


// const js = {
//     name : "girish",
//     age : 23,
//     gender : "male"
// }

// const json = JSON.stringify(js);
// console.log(json);


// function greet(){
//     console.log("girish kumar");
// }
// setTimeout(greet,4000);
// console.log("hello");



// let count = 0;
// function increase(){
//     count++;
//     console.log(count);
// }

// let id = setTimeout(increase,5000);
// clearTimeout(id);
// console.log("girish")



// function greet(){
//     console.log("girish kumar");
// }
// setInterval(greet,3000);
// console.log("mahi")

// let count=0;

// let id = setInterval(function() {
//     count++;
//     if(count==5){
//         clearInterval(id);
//     }
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time); 
// },2000)

// let i=0;

// let id = setInterval(function() {
//     i++;
//     if(i==3){
//         clearInterval(id);
//     }
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time);
// },2000)


// function f1(name,mahi){
//     this.name = name;
//     mahi();
// }

// function f2(){
//     console.log("mahiGirish");
// }

// f1("girish",f2);


// let count = true;
// let countValue = new Promise(function(resolve,reject){
//     if(count){
//         resolve("there is a count value");
//     }else{
//         reject("there is no count value");
//     }
// })

// console.log(countValue);


// let x = 1;

// let result = new Promise(function(resolve,reject){
//     if(x){
//         resolve("hammayya success");
//     }else{
//         reject("govindha govindhaaa");
//     }
// })

// console.log(result);


// let count = new Promise(function(resolve,reject){
//     resolve("promises resolved");
// })

// count.finally(function greet() {
//     console.log("finally");
// })


// async function f1(){
//     console.log("async function")
//     return Promise.reject(1);
// }

// f1()
// .then(function(res){
//     console.log(res +" "+"then");
// }).catch(function(res){
//     console.log(res+" "+"catch")
// })


// let promise = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve("promises resolved");
//     },3000);
// })

// async function f(){
//     console.log("hi");
//     let res = await promise;
//     console.log(res);
//     console.log("helloooo");
// }

// f();


// class person {
//     constructor(name,gender){
//         this.name = name;
//         this.gender = gender;
//         this.age = 23;
//         this.occupation="employee";
//     }
//     greet(){
//         console.log(`hi, This is ${this.name} `)
//     }
// }

// class student extends person{
//     constructor(name,gender){
//         console.log("creating student class");
//         super(name,gender)
//         this.name="lakshmi";
//         this.gender="female";
//         this.age=22
//         this.occupation="student";
//     }
// }

// let result = new student("girishMahi","maleFemale");
// console.log(result)
//result.greet();



// function greet(){
//     var x = "girishkumar";
//     function display(){
//         console.log("hi"+" "+x);
//     }
//     display();
// }
// greet();



// function greet(name) {
//     var x = "girish";
//     function display(){
//         return "hi i am girish"+" "+name;
//     }
//     return display();
// }
// console.log(greet("mahi"));

// let greet = (x) => console.log("girish"+" "+x);
// greet("mahi");



//let age = 20;

// let welcome = (age) => (age>18) ? console.log("he can vote") : console.log("he can't vote");

// welcome(17);

// let sum = (x=10,y=22) => {
//     let res = x+y;
//     console.log(res);
// }
// sum()
//let result = sum(10,20);
//console.log(result)

// function person(){
//     this.name = "girish",
//     this.age = 23;
// }

// var result = new person();
// console.log(result);


// class person {
//     constructor(name){
//         this.name = "girish";
//         this.age = 23;
//     }
// }

// const res1 = new person();
// console.log(res1);

// 
// function person(name) {
//     this.name=name;
//     this.address = function (){
//         return "lepakshi"
//     } 
// }

// let result = new person("lucky");
// console.log(result.address());
// //result.address;

// class person {
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`hi iam girish ${this.name}`)
//     }
// }

// let res = new person("kumar");
//console.log(res.greet);
//res.greet()


// let employee = {firstname:"girishkumar",lastname:"ediga"}

// function invites(arg1,arg2){
//     console.log(arg1+" I am "+this.firstname+" "+this.lastname+" from "+arg2);
// }

// let res = invites.bind(employee);
// res("hiiii","guntakal")


// let array = [20,30,40,50,58,25];

// let res = array.reduce((element,cv) => { return cv+element })

// console.log(res);


// let set1 = {
//     name : "girish",
//     age : "23"
// }

// let set2 = {
//     ...set1,
//     gender : "male",
//     address : "lepakshi"
// }

// // let set3 = [
// //     ...set1,
// //     ...set2
// // ]

// console.log(set2);


// const array = (a,b,c,...arr) => console.log(c)
// array(10,20,30,40,50,58);
// console.log(arr);


// var values = [10,20,30,40,50];
// var [a,b,,d,e] = values

// console.log(d)

// var a;
// console.log(a);
// a=20;

// function details(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// var res1 = new details("girish","23","male");
// var res2 = new details("mahi","23","female");

// // details.prototype.address = "lepakshi";

// // console.log(res1.address);
// // console.log(res2.address);

// details.address = function() {
//     return "lepakshi";
// }

// //details.address()
// console.log(details.address());


// let json = {
//     "name":"girish",
//     "age":"22"
// }

// let js = JSON.parse(json);
// console.log(js.name);


// let js = {
//     name : "girish",
//     gender : "male"
// }

// let json = JSON.stringify(js);
// console.log(json)


// function greet() {
//     console.log("I am girishkumar");
// }

// let id = setTimeout(greet,3000);
// clearTimeout(id);
// console.log("hello")


// let count = 0;
// function increase(){
//     if(count==5){
//         clearTimeout(name);
//     }
//     count++;
// }
// let name = setTimeout(increase,3000);
// console.log("happened")



// function greet(){
//     console.log("masai");
// }

// setInterval(greet,2000);



// let count = 0;
// let id = setInterval(function(){
//     if(count==5){
//         clearInterval(id);
//     }
//     count++;
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time);
// },2000)



// function greet(name,callback){
//     this.name = name;
//     console.log("Hi"+" "+this.name);
//     callback();
// }

// function girish(){
//     console.log("congratulations");
// }

// greet("girish",girish)


// let count = true;

// let countValue = new Promise(function(resolve,reject){
//     if(count){
//         resolve("there is a count value");
//     }else{
//         reject("there is no count value");
//     }
// })

// console.log(countValue);


// let promise = new Promise(function(resolve,reject){
//     resolve("promises is resolved or rejected");
// })
// promise
// .then(function(res){
//     console.log(res);
// })
// .catch(function(res){
//     console.log("error");
// })
// .finally(function(res){
//     console.log('rrr');
// })




// async function f1(){
//     console.log("async function");
//     return Promise.reject("girish");
// }
// f1()
// .then(function(res) {
//     console.log(res)
// })
// .catch(function(res) {
//     console.log("bye");
// })
// .finally(function(res){
//     console.log("how are you");
// })


// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("promise resolved")
//     },4000);
// })

// async function f2(){
//     console.log("heroooo");
//     let res = await promise;
//     console.log(res);
//     console.log("zeroooo");
// }

// f2();


// class person {
//     constructor(name){
//         this.name12 = name;
//     }
//     greet(){
//         console.log(`hello ${this.name12}`)
//     }
// }

// class student extends person{
//     constructor(name){
//         console.log("creating student class");
//         super(name);
//     }

// }

// let res = new student("swadha foundation");
// //console.log(res);
// res.greet();


// class person{
//     constructor(name){
//         this.name = name;
//         this.occupation = "unemployment";
//     }
//     greet(){
//         console.log(`Hello, How are you ${this.name}`)
//     }
// }

// class student extends person {
//     constructor(peru){
//         super(peru)
//         this.occupation = "student";
        
//     }
//     greet() {
//         console.log(`Hello student ${this.name}`);
//         console.log(`hello ${thi.occupation}`);
//     }
// }

// let res = new student("girish");

// let result = new person("Girishkumar");
// console.log(result);



// function greet(name){
//     function display(){
//         console.log("Hi"+" "+name);
//     }
//     return display();
// }

// greet("RRR");




// function greet(){
//     let name = "chinni"
//     function displayName(){
//         return "Hi"+" "+name;
//     }
//     return displayName();
// }
// let res = greet();
// console.log(res);


// function cal(x){
//     function mul(y){
//         return x+y;
//     }
//     return mul;
// }
// let res = cal(4);
// console.log(res(5));



// let greet = () => console.log("mahiGirish");
// greet()

//let x = 10;
// let greet1 = (x) => console.log(x);
// greet1(10)


// let age = 23;
// let welcome = (age>18) ? () => console.log("eligible") : () => console.log("not eligible");
// welcome(age)


// let sum = (a,b) => {
//     let result = a+b;
//     return result;
// }

// let out = sum(10,20);
// console.log(out);




// function fun(x=50,y=25){
//     return x+y;
// }
// console.log(fun(58,50))



// class person {
//     constructor(name) {
//         this.name = name;
//         this.occupation = "ASE"
//     }
// }

// let res = new person("girish");
// console.log(res);

// let res1 = new person("mahi");
// console.log(res1);



// function person(name) {
//     this.name = name;
//     this.greet = function() {
//         return "Hi"+" "+this.name;
//     }
// }
// let res = new person("g");
// console.log(res.greet());




// class person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// let res = new person("girish");
// res.greet();


// var employee = {
//     first_name : "gireeshkumar",
//     last_name : "ediga"
// }

// function invite(greet1,greet2){
//     console.log(greet1,+" "+this.first_name+" "+this.last_name+" "+greet2);
// }

// let res = invite.bind(employee);
// res("hi","how are you")

// const a = 10;
// console.log(a);

// function h1() {
//     const a = 20;
//     console.log(a);
// }

// h1();

// console.log(a);



// const a = 10;
// console.log(a);

// {
//     const a = 20;
//     console.log(a);
// }

// console.log(a);

// let add = (num) => num+1;

// function number(fun,x){
//     return fun(x);
// }

// let result = number(add,5);
// console.log(result);


// let mul = (mul) => mul*10;

// let numbers = [1,2,3,4,5,6];

// let output = numbers.map(mul);

// console.log(output);



// let numbers = [10,20,30,40,50];

// let output = numbers.map((element) => element-1);

// console.log(output);



// let num = [100,200,300,400];

// let ans = [];

// num.forEach((element,index,array) => 
// {element*=10;
//  ans.push(element)
// })

// console.log(ans);


// const users = [
//     {
//         name : "girish",
//         age : 23
//     },
//     {
//         name : "mahi",
//         age : 23
//     },
//     {
//         name : "lucky",
//         age : 22
//     }
// ]

// let filtered = users.filter((element) => element.age==22);

// console.log(filtered);

// let num = [10,20,30,20,10];

// let result = num.findIndex((user) => user==0);

// console.log(result);



// let array = [10,20,30,40,50];

// const sum = array.reduce((accumalotor,element) => accumalotor+element);

// console.log(sum);


// var set1 = [1,2,3,4,5];
// var set2 = [6,7,8,9,0];

// var set3 = [...set1, ...set2];

// console.log(set3);



// var set1 = {
//     name : "girish",
//     age : 23
// }

// var set2 = {
//     ...set1,
//     email : "ediga@gmail.com"
// }

// console.log(set2);



// const rest = (a,b,...arr) => console.log(b);

// rest(10,20,30,40,50);


// var values = [10,20,30,40];

// var [a,,c] = values;

// console.log(a,c);


// x = 5;
// console.log(x);
// var x;

// var y;
// y=10;
// console.log(y);

// var z;
// console.log(z);
// z = 20;

// d();

// function d(){
//     console.log("girishkumar");
// }

// d();


// function greet(name,girish){
//     console.log(name);
//     girish();
// }

// function g(){
//     console.log("school");
// }

// greet("masai",g);




// function details(name,age,gender){
//     this.name = name,
//     this.age = age,
//     this.gender = gender
//     this.address = function() {
//         return "lepakshi";
//     }
// }

// let obj1 = new details("girish",23,"male");
// let obj2 = new details("sai",22,"male");

// details.prototype.email = "ediga@gmail.com";

// details.greet = function() {
//     console.log("Hello");
// }

// details.greet();

// console.log(obj1.email);
// console.log(obj2.email);



// let jsonobj = {
//     "name" : "girish",
//     "age" : "23",
//     "email" : "edigagireeshkumar@gmail.com" 
// }

// let jsobj = JSON.parse(jsonobj);

// console.log(jsobj);


// let jsobj = {
//     name : "girish",
//     age : "23",
//     email : "edigagireeshkumar@gmail.com" 
// } 

// let jsonobj = JSON.stringify(jsobj);

// console.log(jsonobj);


// console.log("Hi");

// let id = setTimeout(function() {
//     console.log("hello");
// },3000);
// // clearTimeout(id);
// console.log("How are you");


// let count=0;

// let id= setInterval(function() {
//     if(count==5){
//         clearInterval(id);
//     }
//     count++;
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time);
// },2000);

// setInterval(greet,3000);

// function greet() {
//     console.log("hi");
// }


// let promise = new Promise(function(resolve,reject) {

// })


// let count = 0;

// let res = new Promise(function(resolve,reject) {
//     if(count){
//         resolve("there is a count value");
//     }else {
//         reject("there is no count value");
//     }
// })

// console.log(res);


// let ans = true; 

// let count = new Promise(function(resolve,reject) {
//     if(ans){
//         resolve("promise is resolved");
//     }else{
//         reject("promise rejected");
//     }
// })

// count
// .then(function success(res){
//     console.log("success");
// })
// .catch(function error(res) {
//     console.log("error");
// })
// .finally(function fin() {
//     console.log("okay");
// })



// class person {
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`Hello ${this.name} kumar`);
//     }
// }

// class studnet extends person{

// }

// let res = new studnet("girish");
// res.greet();



// class person{
//     constructor(name){
//         this.name = name;
//         this.occupation = "umemployee";
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// class student extends person {
//     constructor(name) {
//         console.log("creating student class");
//         super(name);
//         this.occupation = "student";
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//         console.log(`${this.occupation}`);
//     }
// }

// let res = new student("bablu");
// console.log(res);
// res.greet();




// function greet(name) {
//     function display(){
//         console.log("Hi"+" "+name);
//     }
//     return display();
// }
// greet("girishkumar");


// function greet(){
//     let name = "king";
//     function displayName(){
//         return "Hi"+" "+name;
//     }
//     return displayName()
// }

// const res = greet();
// console.log(res);



// function calculate(x){
//     function multiple(y){
//         return x+y;
//     }
//     return multiple;
// }

// let res = calculate(3);
// console.log(res(20));


// let age = 10;

// let welcome = (age>25) ? () => console.log("matured guys") : () => console.log("not matured");

// welcome();


// let sum = (a,b) => {
//     let result = a+b;
//     return result;
// }

// let res = sum(10,20);
// console.log(res);


// function sum(x,y){
//     return x+y;
// }

// console.log(sum(20,40));


// class person {
//     constructor() {
//         this.name = "girishkumar ediga";
//         this.age = 25;
//     }
//     greet() {
//         console.log(`hello ${this.name}`);
//     }
// }

// const res = new person();
// console.log(res);
// res.greet();



// function invite(g1,g2) {
//     console.log(g1+` ${this.firstname} ${this.lastname} `+g2)
// }

// var emp = { firstname : "girishkumar", lastname : "ediga"}


// var res = invite.bind(emp);

// res("rrr","kgf");


// var res = function() {
//     console.log("hello");
// }

// res();


// var res = function() {
//     return "hello";
// }

// console.log(res());

// const a = 10;
// console.log(a);

// function sum(){
//     const a = 20;
//     console.log(a);
// }

// sum();

// console.log(a);


// const a = 10;
// console.log(a);

// {
//     const a = 20;
//     console.log(a);
// }

// console.log(a)


// let add = (num) => num*10;

// function girish(fun,x){
//     return fun(x);
// }

// let result = girish(add,10);
// console.log(result);


// let mul = (num) => num*10;

// let array = [1,2,3,4,5];

// let output = array.map(mul);
// console.log(output);


// let num = [10,20,30,40,50];

// let output = num.map((user) => {
//     user-=10;
//     return user;
// })

// console.log(output);

// let number = [9,19,29,39,49,59];
// let ans = [];
// number.forEach((user) => {
//     user+=1;
//     ans.push(user);
// })

// console.log(ans);


// const users = [
//     {
//         name : "girish",
//         age : "23",
//         gender : "M"
//     },
//     {
//         name : "mahi",
//         age : "23",
//         gender : "F"
//     },
//     {
//         name : "lucky",
//         age : "23",
//         gender : "F"
//     }
// ]

// let output = users.filter((user) => user.age=="23");
// console.log(output);


// let array = [6,4,7,1,8,3,4];

// let result = array.findIndex((user) => user===7 );
// console.log(result);


// let set1 = [1,2,3,4];
// let set2 = [5,6,7,8];

// let set3 = [...set1, ...set2];
// console.log(set3);


// let set1 = {
//     name : "girish",
//     age : '23'
// }

// let set2 = {
//     ...set1,
//     gender : "male"
// }

// console.log(set2);



// const func_name = (a,b,...c) => console.log(b);

// func_name(10,20,30,40,50,60)


// let values = [10,20,30,40,50];

// var [a,b,,d,e] = values;

// console.log(e);




// d();

// function d(){
//     console.log("girish");
// }


// function greet(x,giri){
//     console.log(x);
//     giri();
// }

// function ntg(){
//     console.log("hello");
// }

// greet(10,ntg)




// function details(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.address = function(){
//         console.log("lepakshi");
//     }
// }

// let res = new details("girishkumar","22","Male");
// //console.log(res);
// details.prototype.course = "full-stack web developmemt";
// //console.log(res);
// //console.log(res.course);

// details.greet = function(){
//     console.log("hello");
// }

// details.greet();


// let res = setTimeout(function(){
//     console.log("hiiiii");
// },3000);
// clearTimeout(res);
// console.log("how are you");


// let count = 0;
// let id = setInterval(function(){
//     if(count==5){
//         clearInterval(id)
//     }
//     count++;
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time);
// },2000);



// let count = 0;

// let res = new Promise(function(resolve,reject){
//     if(count){
//         resolve("correct");
//     }else{
//         reject("wrong");
//     }
// })

// console.log(res);



// let fact = false;

// let count = new Promise(function(resolve,reject){
//     if(fact){
//         resolve("sucesss");
//     }else{
//         reject("errors");
//     }
// })

// count
// .then(function sucess(res){
//     console.log("coorect");
// })
// .catch(function error(res){
//     console.log("wrong");
// })

// console.log(count);



// async function f(){
//     console.log("async function");
//     return Promise.reject("loss");
// }

// f()
// .then(function success(res) {
//     console.log(res+" "+"finally");
// })
// .catch(function error(res){
//     console.log(res+" "+"going");
// })



// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("hloooooo")
//     },4000)
// });


// async function f(){
//     console.log("hi")
//     let result = await promise;
//     console.log("bye");
//     console.log(result);
// }

// f();



// class person {
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`hello ${this.name}`)
//     }
// }

// class student extends person {
//     constructor(name) {
//         console.log("creatig student class");
//         super(name);
//     }
// }

// let res = new student("gowd");
// console.log(res);
// res.greet()



// class person{
//     constructor(name){
//         this.name=name;
//         this.occupation = "employee";
//     }
//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// class student extends person {
//     constructor(name){
//         super(name);
//         this.occupation = "student no 1";
//     }
//     greet(){
//         console.log(`Hello student ${this.name}`);
//         console.log("occupation : "+this.occupation);
//     }
// }

// let res = new student("kingggg");
// console.log(res);
// res.greet();



// function greet(){
//     let name = "hlo";
//     function g(){
//         return "hii"+" "+name;
//     }
//     return g();
// }

// console.log(greet());



// function calculate(x){
//     function multiple(y){
//         return x+y;
//     }
//     return multiple;
// }


// let result = calculate(10);
// console.log(result(20));


// const greet = (x,y) => console.log(x*y);
// greet(10,20);


// let age = 19;

// let welcome = (age>18) ? () => console.log("eligible") : () => console.log("Not");
// welcome();\


// let sum = (a,b) => {
//     let res = a+b;
//     return res;
// }

// let result = sum(11,22);
// console.log(result);


// function sum(x=5,y=8){
//     return x+y;
// }

// console.log(sum(6,10))


// class person {
//     constructor(name){
//         this.name = name;
//         this.age = 23;
//     }
//     greet(){
//         console.log(`hello ${this.name}`);
//     }
// }

// const res = new person("girish");
// console.log(res);
// res.greet();


// var employee = { name :"girish", age : "23", gender : "Male"};

// function invites(g1,g2) {
//     console.log(`${g1} ${this.name} my age is ${this.age} i am a ${this.gender} how are you ${g2}`);
//     // console.log(`Hi ${this.name} my age is ${this.age} i am a ${this.gender} how are you`);
// }


// let result = invites.bind(employee)
// result("hi","bye bye");



// const a = 10;
// console.log(a);

// {
//     const a = 20;
//     console.log(a);
// }

// console.log(a);


// let add = num => num+2;

// function numbers(fun,x){
//     return fun(x);
// }

// let result = numbers(add,5);
// console.log(result);


// let mul = num => num*10;

// let numbers = [1,2,3,4,5,6,7,8,9];

// let result = numbers.map(mul);

// console.log(result);


// let num = [10,23,20,37,30,55,10];

// let result = num.reduce((ac,e) => ac+e);

// console.log(result);


// let users = [
//     {
//         name : "girish",
//         age : 23
//     },
//     {
//         name : "kumar",
//         age : 22
//     },
//     {
//         name : "gowd",
//         age : 23
//     }
// ]

// let res = users.filter((e) => e.age !== 23)
// console.log(res);


// let set1 = [10,20,30];
// let set2 = [30,40,50];

// let set3 = [...set1,...set2];

// console.log(set3);


// let details = {
//     name : "girish"
// }

// let res = {
//     ...details,
//     age : 23,
//     mobile: 7997432307
// }

// console.log(res);

// function f1(a,b,...c){
//     console.log(a);
// }

// f1(10,20,30,40,50,60);


// let values = [10,20,30];

// let [a,c] = values;

// console.log(c);

// var x;
// x = 10;
// console.log(x);

// f1();

// function f1() {
//     console.log("girish");
// }


// function greet(name,x){
//     console.log(name)
//     x();
// }

// function girish(){
//     console.log("king");
// }

// greet("girishkumar",girish)



// function details(name,age,gender){
//     this.name = name,
//     this.age = age,
//     this.gender = gender,
//     this.address = function() {
//         return "lepakshi";
//     }
// }

// let result = new details("girish",23,"Male");

// console.log(result.address());




// function person() {
//     this.name = "girish",
//     this.age = 23
// }

// let result = new person()
// person.prototype.gender = "male";

// // console.log(result);
// // console.log(result.gender)

// person.greet = function() {
//     console.log("Hello");
// }

// person.greet();


// var json = {
//     "name": "girish",
//     "age":23,
//     "gender":"male",
// }

// let res = JSON.parse(json);
// console.log(res);


// var js = {
//     name: "girish",
//     age:23,
//     gender:"male",
// }

// let res = JSON.stringify(js);
// console.log(res);

// let count = 0;

// let id = setInterval(function greet() {
//     while(count==5){
//         clearInterval(id);
//     }
//     count++;
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time);
// },3000);



// let count = 1;

// let result = new Promise(function(resolve,reject){
//     if(count){
//         resolve("there is a count value");
//     }else{
//         reject("there is no count value");
//     }
// })
// .then(function sucess(res){
//     console.log(res+" sucess ");
// })
// .catch(function error(res){
//     console.log(res+" error ");
// })
// .finally(function fin(res){
//     console.log("thaggedhe le");
// })



// class person {
//     constructor(name){
//         this.name = name;
//         this.occupation = "unemployee";
//     }
//     greet() {
//         console.log(`hello ${this.name}`);
//     }
// }

// class student extends person{
//     constructor(name){
//         console.log("creating student class");
//         super(name);
//         this.occupation = "student";
//     }
//     greet() {
//         console.log(`hello student ${this.name}`)
//         console.log('occupation '+this.occupation)
//     }
// }

// let res = new student("gowd");

// // console.log(res);
// res.greet();



// function greet(name){
//     function display(){
//         console.log(name)
//     }
//     return display();
// }

// greet("hero");


// function calculate(x){
//     function multiple(y){
//         return x*y;
//     }
//     return multiple;
// }

// const res = calculate(10);
// console.log(res(15));


// function sum(x=5,y=20){
//     return x+y;
// }

// console.log(sum())

// class person {
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`hello ${this.name}`);
//     }
// }

// let res = new person("nani");
// console.log(res);
// res.greet();


// var employee = { name :"girish", age : "23", gender : "Male"};

// function invites(g1,g2){
//     console.log(g1+" "+this.name+" "+this.age+" "+this.gender+" "+g2)
// }

// let res = invites.bind(employee)

// res("hi","bye")


// async function f1() {
//     console.log("hlo");
//     return Promise.resolve("async");
// }

// f1()
// .then(function(res){
//     console.log(res);
// })


// let result = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("primise")
//     },3000)
// });

// async function f2(){
//     console.log("hii");
//     let res = await result;
//     console.log(res);
//     console.log("bye");
// }

// f2();

