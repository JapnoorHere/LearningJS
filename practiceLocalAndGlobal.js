var a = 3;
var a = 4;
// * this will work

// let b = 3;
// var b = 4;
// * this will not work

// var c = 8;
// let c = 4;

// * not work

// let f = 8;
// let f = 2;

// * not work

// & global and local variable using var -> will work

var shadow = "Global";

function checkLocal(){
    var shadow = "Local";
    console.log(shadow);
}
checkLocal();
console.log(shadow);


// & global and local variable using let -> will work

let shadow1 = "Global";

function checkLocal(){
    let shadow1 = "Local";
    console.log(shadow1);
}
checkLocal();
console.log(shadow1);


// & global and local variable using const -> will work

let shadow12 = "Global";

function checkLocal(){
    let shadow12 = "Local";
    console.log(shadow12);
}
checkLocal();
console.log(shadow12);

