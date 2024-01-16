function a() {
  return 4 + 6;
}

// console.log(a());

const fact = (n)=>{
    let f = 1;
    for(let i=1;i<=n;i++){
        f *= i;
    }
    return f;
}

console.log(fact(5));