let obj = {
    name : "Japnoor",
    age : 67
}

for(let x in obj){
    console.log(obj[x]);
}

let arr = [1,2,3,4,"Hi"];

for (const key in arr) {
    console.log(arr[key]);
}

for (const val of arr) {
    console.log(val);
}
