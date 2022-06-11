// closure


// function outer(){
//     var name = "kumar";
//     function inner(){
//         return "Hi"+" "+name;
//     }
//     return inner();
// }

// var res = outer();
// console.log(res);


function calculate(x){
    function multiply(y){
        return x*y;
    }
    return multiply(9);
}

var res = calculate(5);
console.log(res);