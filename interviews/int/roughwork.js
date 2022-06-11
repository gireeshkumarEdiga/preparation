

// const girish = (array) =>  {
//     let ans = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2==0){
//             ans.push(array[i]);
//         }
//     }
//     ans.sort((a,b) => b-a);
//     // let out = [];
//     // for(let j=ans.length-1; j>=0; j--){
//     //     out.push(ans[j]);
//     // }
//     let output = [];
//     for(let k=0; k<ans.length; k++){
//         let a = ans[k]**2;
//         output.push(a);
//     }
//     console.log(output);
// }

// girish(array);




let array = [1,4,7,3,2,6];

let output = array.filter((user) => user%2==0)
// console.log(output);

output.sort((a,b)=> a-b);

let out = output.map((user) => user**2);

console.log(out);

