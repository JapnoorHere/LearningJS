// * hoisted but not accessed using const and let
// console.log(mul(3,4));

const mul = function(a,b){
    return a*b;
}

console.log(mul(3,4));


// & arrow functions

// const subtract = (a,b) => a-b;

// console.log(subtract(4,5)); // * not accessible but hoisting

const subtract = (a,b) => {
    return a-b;
};

console.log(subtract(5,4));