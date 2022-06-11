//constructor function

// function movies(){
//     this.tax = true;
//     this.mukeshadd = function() {
//         console.log("add is mandatory");
//     } 
// }

// var obj1 = new movies();
// console.log(obj1);

// function details(name,age,city){
//     this.name = name,
//     this.age = age,
//     this.city = city
//     this.roollno = function() {
//         console.log("17425");
//     }
// }

// var res = new details("girish kumar",22,"hyderabaed");
// console.log(res);
// console.log(res.roollno);


// function person() {
//     this.name = "girish",
//     this.age = 22
// }

// var person1 = new person;
// var person2 = new person;

// person.prototype.gender = "male";

// console.log(person1.gender);
// console.log(person2);\

// person.greet = function(){
//     console.log("Hello world");
// }

// person.greet();

var array = [0,2,0,6,9,9];
var obj = {};

for(var i=0; i<array.length; i++){
    if(obj[array[i]]){
        obj[array[i]]++;
    }else{
        obj[array[i]]=1;
    }
}


console.log(obj[array[1]]);