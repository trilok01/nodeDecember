const http = require('http');
const fs = require('fs');

var server = http.createServer();

server.on("request", (req, res) => {
    /* fs.readFile("largeFile.txt", (err, data) => {
        if(err){
            res.end(err);
        } else {
            res.end(data.toString());
        }
    }); */

    /* var readFileEmitter = fs.createReadStream("largeFile.txt");
    readFileEmitter.on("data", (chunk) => {
        debugger;
        res.write(chunk.toString());
        console.log(readFileEmitter.bytesRead);
    });

    readFileEmitter.on("end", () => {
        res.end();
    }); */

    var myPromise = new Promise();
    
});



server.listen(8000, () => {
    console.log("Listening on Port 8000");
});