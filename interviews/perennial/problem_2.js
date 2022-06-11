let array=[12, 3, 4, 1, 6, 9];
let sum = 24;

function triplet(array,sum){
    let out = [];
    for(let i=0; i<array.length; i++){
        if(Math.floor(array[i]%3)===0){
            //console.log(array[i])
            out.push(array[i]);
            
        }
    }

    for(let j=0; j<out.length; j++){
        let summing = 0 
        let s = [];
        for(let k=0; k<out.length; k++){
            if(j===k){
                continue;
            }else{
                summing+=out[k];
                s.push(out[k]);
            }
        }
        if(summing==sum){
            console.log(s.join(" "));
            return "True";
        }
    }
    return "False";
}

console.log(triplet(array,sum));