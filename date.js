let a = new Date();
console.log(typeof a);
console.log(a.getFullYear());
console.log(a.getMonth()); // based on 0-11

console.log(a.getDate());

console.log(a.getHours());

console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());

console.log(a.toLocaleTimeString());

a.setDate(31); // * If the adjusted date is 6, it means the date is wrapping around and representing the 6th day of some month.

console.log(a.getDate());
