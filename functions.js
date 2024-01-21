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



//! comma operator


function one(){
  console.log(1);
  return 1;
}


function two(){
  console.log(2);
  return 2;
}


function three(){
  console.log(3);
  return 3;
}

console.log("comma operator : ");
let c = (one(),two(),three());
console.log(c);
 // * three function returned statement will be stored in c that is 3;