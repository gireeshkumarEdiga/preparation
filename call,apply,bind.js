// call()


var employee = {firstname : "girishkumar", lastname : "ediga"}

function invite(greeting1,greeting2){
    console.log(greeting1+" "+this.firstname+" "+this.lastname+" "+greeting2);
}

var res = invite.bind(employee);

res("mahi","lakshmi");