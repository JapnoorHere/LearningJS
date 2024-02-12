setTimeout(()=>{
    clearInterval(intervalId);
},5000)

const interval = ()=>{
    console.log("Interval");
}

let intervalId = setInterval(interval,1000);

