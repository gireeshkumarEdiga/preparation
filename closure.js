// // nested function example

// // outer function
// function greet(name) {

//     // inner function
//     function displayName() {
//         console.log('Hi' + ' ' + name);
//     }

//     // calling inner function
//     displayName();
// }

// // calling outer function
// greet('John'); // Hi John





// function greet(name) {
//     function displayName() {
//         console.log('Hi' + ' ' + name);
//     }

//     // returning a function
//     return displayName;
// }

// const g1 = greet('John');
// console.log(g1); // returns the function definition
// g1(); // calling the function





// closure example

// function calculate(x) {
//     function multiply(y) {
//         return x * y;
//     }
//     return multiply;
// }

// const multiply3 = calculate(3);
// const multiply4 = calculate(4);

// console.log(multiply3); // returns calculate function definition
// console.log(multiply3()); // NaN

//  console.log(multiply3(6)); // 18
// console.log(multiply4(2)); // 8




function outer(x,y){
    function inner() {
        return x+y;
    }
    return inner();
}

console.log(outer(5,10))