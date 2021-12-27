const fs = require('fs');
const eventEmitter = require('events');

var customEvent = new eventEmitter();

customEvent.on("fileExists", () => {
    var fileData = fs.readFileSync("SampleFile/Sample.txt");
    console.log(fileData.toString());
})

customEvent.on("folderExists", () => {
    var fileExists = fs.existsSync("SampleFile/Sample.txt");
    if(fileExists){
        customEvent.emit("fileExists", {});
    }
})

var folderExist = fs.existsSync("SampleFile");

if(folderExist) {
    customEvent.emit("folderExists", {});
}