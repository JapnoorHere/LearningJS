const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url == '/read'){
        // fs.readFile('Creating server using Node JS/read.txt','utf8',(err,data)=>{
        // }
        const data = fs.readFileSync('Creating server using Node JS/read.txt','utf8');
        res.end(data);
    }
})

const port = 5000;
server.listen(port,()=>{
    console.log("Listening");
})