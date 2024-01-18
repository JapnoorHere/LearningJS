function a() {
  return 4 + 6;
}

// console.log(a());



//* DIFFERENT WAYS TO WRITE FUNCTIONS

let add = function (a,b){
  return a+b;
}

console.log("sum : " + add(4,5));




const fact = (n)=>{
  let f = 1;
  for(let i=1;i<=n;i++){
      f *= i;
  }
  return f;
}

console.log(fact(5));