const fs = require('fs');
const eventEmitter = require('events');

var emitter = new eventEmitter();

emitter.on("fileReadComplete", (data) => {
    console.log(data.toString());
});

emitter.on("errorInReading", (err) => {
    console.log(err.message);
});

fs.readFile("./JavaScripts/enhancement.txt", (err, data) => {
    if(err){
        emitter.on("errorInReading", err);
    } else {
        emitter.emit("fileReadComplete", data);
    }
});