const fs = require('fs');

var readFileStream = fs.createReadStream("example.txt",{encoding : "utf-8",highWaterMark : 64})
var a;
var writeFileStream = fs.createWriteStream("write.txt",{encoding : "utf-8" , highWaterMark : 64});
readFileStream.on("data",(chunk)=>{
    console.log("chunk - > ");
    a += chunk;
})

readFileStream.on("end",()=>{
    writeFileStream.write(a,(err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("done");
        }
    })
})

writeFileStream.on('finish', () => {
    console.log('Write stream has finished writing.');
});

// readFileStream.close();
// readFileStream.on("close",()=>{
//     console.log("closed");
// })