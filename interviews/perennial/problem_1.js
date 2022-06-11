let N = 15;
let M = 7;

function closest(N,M){
    let result = 0;
    for(let i=1; i<N; i++){
        if(Math.floor(i%M) === 0){
            result=i;
        }
    }
    return result;
}
console.log(closest(N,M));