// ! Strings are immutable 
// ^  values will not change in string variable


let s="Japnoor";
console.log(s);

console.log(`I am ${s}`); // * backtic -> ` `


let f = "HelloHel";

console.log(f.toUpperCase());
console.log(f.toLowerCase());
console.log(f.length);

console.log(f.slice(0,3));
console.log(f.slice(1)); // !prints all from 1 index

console.log(f.replace("Hel","i")); // ^ replace only first occurence


console.log(f.concat(s,"Hi","oh no  ","Siya")); // * keep on adding for concatenation


