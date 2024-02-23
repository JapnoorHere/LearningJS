const zlib = require('zlib');

const data = "Japnoor Singh";

zlib.gzip(data,(err,compData)=>{

    zlib.gunzip(compData,(err,deCompData)=>{
        console.log(deCompData.toString());
    })
})