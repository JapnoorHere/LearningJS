let fruits = [1,true,3,"green","apple"];

console.log(typeof fruits);

fruits.push("kiwi"); // ^ insert at last

console.log(fruits);

fruits.unshift("banana"); // & insert at first

console.log(fruits);

let removed1 = fruits.pop(); // ^ removes from last

console.log(removed1);

console.log(fruits);

let removed2 = fruits.shift(); // * removes from first

console.log(fruits);

let indexOfGreen = fruits.indexOf("green"); // ^ return index and if not present then -1

console.log(indexOfGreen);

let halfFruits = fruits.slice(1,3); // * 3 index will not be counted that is n-1

console.log(halfFruits);

let removed = fruits.splice(1,2,"pear","orange"); // ! exhange values at specified index

console.log(removed);

console.log(fruits);

let moreFruits = ["grapes",]

console.log(console.log());

console.log();