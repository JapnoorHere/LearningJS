let arr = [1,2,34,5];

arr.push("heelo"); // ^ add at end

console.log(arr);

arr.unshift("Hel");

console.log(arr);

console.log(arr.shift());

console.log(arr);

console.log(arr.indexOf(34));;


let c = arr.slice(1,3);

console.log(c[0]);

let rem = arr.splice(1,2,"23","3");

console.log(arr);

console.log(rem[1]);

