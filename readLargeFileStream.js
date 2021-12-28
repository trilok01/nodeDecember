const fs = require('fs');

/* fs.readFile("largeFile.js", (err, data) => {
    debugger;
    console.log(data.toString());
}); */

var fileReaderEmitter = fs.createReadStream("largeFile.js");

fileReaderEmitter.on("data", (chunk) => {
    //debugger;
    console.log("Reading Data from file");
    console.log(chunk.length);
});

debugger;