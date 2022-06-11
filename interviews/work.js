// let array = ["the", "quick", "brown", "fox"];

// function girish(array){
//     let output = [];
//     for(let i=0; i<array.length; i++){
//         // let count = 0;
//         // for(let j=0; j<array[i].length; j++){
//         //     count++;
//         // }
//         // output.push(count);
//         output.push(array[i].length);
//     }
//     return output;
// }

// console.log(girish(array));


// let input = [1, 2, 3, 4, 5];

// let output = input.reduce((a,element) => a+element);

// console.log(output);


// let input = "Full Stack Tutorials";

// function girish(input){
//     let output = "";
//     for(let i=input.length-1; i>=0; i--){
//         output+=input[i];
//     }
//     return output;
// }

// console.log(girish(input));


// Write a function that can be called like so: greeter(“Hello”)(“Candidate”) and will log “Hello, Candidate!” to the console


// function greeter(a){
//     function g(b){
//         return a+" "+b;
//     }
//     return g("Candidate");
// }

// console.log(greeter("Hello"))