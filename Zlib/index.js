const zlib = require('zlib');
const http = require('http');
const fs = require('fs');

const readStream = fs.createReadStream("Zlib/example.txt",{encoding : "utf-8",highWaterMark : 64});

http.createServer((req,res)=>{
    if(req.url == "/"){
        // readStream.on('data',(data)=>{
        //     zlib.gzip(data,(err,compData)=>{
        //         res.writeHead(200,{"content-type" : "text/plain" , "content-encoding" : "gzip"});
        //         res.write(compData);
        //         res.end();
        //     })
        // })

        res.writeHead(200,{"content-type" : "text/plain" , "content-encoding" : "gzip"});
        readStream.pipe(zlib.Gzip()).pipe(res);
    }
}).listen(3000,()=>{});