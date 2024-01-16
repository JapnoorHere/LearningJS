for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

let obj = {
    name : "Japnoor",
    role : "programmer",
    company : 'Google'
}

let a =[1,2,4];
let s = "string";
for (let key in s) {
    console.log(s[key]);
}

for (const iterator of "Jap") {
    console.log(iterator);
}

a.forEach(element => {
    console.log(element);
});