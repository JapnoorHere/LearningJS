const http = require('http');
const fs = require('fs');
const querystring = require('querystring')

const readableStream = fs.createReadStream("Practicing read and write streams/readAndWriteStream.html",{encoding : "utf-8",highWaterMark : 64});
const writeStream = fs.createWriteStream("Practicing read and write streams/writestream.txt",{encoding:"utf-8"});
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        readableStream.pipe(res);
    }
    else if(req.url == "/form-data"){
            let body = "";
        req.on('data',(chunk)=>{
            body += chunk;
            
        })

        req.on('end',()=>{
            console.log(querystring.parse(body).data);
            writeStream.write(body);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            writeStream.on('finish',()=>{
                res.end("Data writte in file");
            })
        })

        
        
    }
}).listen(3000,()=>{
    console.log("Hello");
})