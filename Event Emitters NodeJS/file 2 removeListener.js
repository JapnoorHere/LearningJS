var EmitListener = require("events");
var emitListener = new EmitListener();

function hello(a,b){
    
    console.log("Hello",a,b);
}

emitListener.on("hello",hello);


for(let i=0;i<5;i++){
    if(i == 3){
        emitListener.removeListener("hello",hello);
    }
    emitListener.emit("hello","rohit","sharma");

}