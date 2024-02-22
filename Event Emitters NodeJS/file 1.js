const EventEmitter = require("events");
var myEventEmitter = new EventEmitter();

myEventEmitter.on("kuchhvi",(a,b)=>{
    console.log("Kuchhvi" , a ,b);
})

myEventEmitter.emit("kuchhvi","Kri","Jana");
