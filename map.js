let map1 = new Map();

map1.set(1, 10);
map1.set(5, 50);

console.log(map1.get(5));

let map2 = new Map([
    [1, 2],[3, 4], [5, 6]
]);

console.log(map2); // ! array of key value pairs


map2.clear();

console.log(map2);

console.log(map1.keys());
console.log(map1.values());
console.log(map1.has(5)); // * checks for keys

map1.delete(1); // ^ delete key value pair using key

console.log(map1);
