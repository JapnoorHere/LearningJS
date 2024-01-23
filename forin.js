let person ={name:"Sham",age : 30, occupation : "Developer"};

for(let key in person){
    console.log(person[key] + " -> " + key);
}


for(let key in person){
    console.log(person.key); // * print undefined   
}