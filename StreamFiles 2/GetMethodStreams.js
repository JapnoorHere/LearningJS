const http = require('http');
const fs = require('fs');
const url = require('url');
const readStream = fs.createReadStream("StreamFiles 2/GetMethodStreams.html",{encoding : "utf-8",highWaterMark : 64});
const writeStream = fs.createWriteStream("StreamFiles 2/getWrite.txt");
http.createServer((req,res)=>{
    console.log(req.url);
    const reqUrl = url.parse(req.url,true);
    console.log(reqUrl);
    if(req.url == "/"){
        readStream.pipe(res);
    }
    else if(reqUrl.pathname == "/data"){
        writeStream.write(reqUrl.query.data);
        res.end("done");
    }
}).listen(4000,()=>{
    console.log("listening");
})