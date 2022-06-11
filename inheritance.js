// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// class Student extends Person {

// }

// let student1 = new Student("girish");
// student1.greet();



// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`hello ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name) {
//         console.log("creating student class");

//         super(name);
//     }
// }

// let student1 = new Student("girish");
// student1.greet();



// class Person {
//     constructor(name) {
//         this.name = name+"kumar";
//         this.occupation = "unemployment";
//     }

//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// class Student extends Person {

//     constructor(name) {
//         super(name);

//         this.occupation = "student";
//     }

//     greet() {
//         console.log(`Hello student ${this.name}`);
//         console.log(`occupation is  : ` + this.occupation);
//     }
// }

// let p = new Student("girish");
// p.greet();



// Object.create()


// var parents = {
//     father : "venkatesulu",
//     mother : "shakuntala"
// }

// var son = Object.create(parents);
// son.name = "girish";

// var daughter = Object.create(parents);
// daughter.name = "indu";



// constructor function

// function Son() {
//     this.name = "girishkumar"
// }

// var s = new Son();
// console.log(s);

// Son.prototype.gender = "Male";
// console.log()
// // s.prototype.gender = "Male";
// // console.log(s.gender);

// var parents = {
//     father : "x",
//     mother : "y"
// } 

// son.prototype.gender = "Male";

// // var s = new son()

// console.log(son.gender);

function Person() {
    this.name = "girishkumar",
    this.age = 23
}

const person1 = new Person();
const parent2 = new Person();

Person.prototype.gender = "male";
Person.prototype.gender = "female";

console.log(Person.prototype);
console.log(person1.gender);