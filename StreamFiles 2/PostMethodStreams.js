const http = require('http');
const fs= require('fs');
const querystring = require('querystring');

const readStream = fs.createReadStream("StreamFiles 2/PostMethodStreams.html",{encoding:"utf-8",highWaterMark:64});
const writeStream = fs.createWriteStream("StreamFiles 2/postWrite.txt");

http.createServer((req,res)=>{
    if(req.url == "/"){
        res.setHeader('Content-Type', 'text/html');
        readStream.pipe(res);
    }
    else if(req.url == "/data"){
        let text = "";
        req.on("data",(chunk)=>{
            text += chunk;
        })
        req.on('end',()=>{
            const final = querystring.parse(text).data;
            writeStream.write(final);
            res.end("done");
        })
    }
}).listen(3000,()=>{console.log("Listening");})