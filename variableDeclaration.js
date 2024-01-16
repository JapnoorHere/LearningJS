
function example(){
    console.log(fun);
    if(true){
        var fun = "I am fun-scoped"; // ^ function level scope
        let a = 6; // & block level scope
    }
    console.log(a);
    console.log(fun);
}

example();

// console.log(fun); // * gives error