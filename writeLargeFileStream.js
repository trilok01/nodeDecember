const fs = require('fs');

var fileReaderEmitter = fs.createReadStream("largeFile.txt");
var fileWriterEmitter = fs.createWriteStream("largeFileWrite.txt");

fileReaderEmitter.on("data", (chunk) => {
    debugger;
    console.log("Reading data from file");
    console.log(chunk.length);
    fileWriterEmitter.write(chunk);
})