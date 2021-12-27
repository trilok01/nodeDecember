const fs = require('fs');

var folderExist = fs.existsSync("SampleFolder");
if(folderExist) {
    var fileExists = fs.existsSync("SampleFolder/sampleFile.txt");
    if(fileExists) {
        //fs.renameSync("SampleFolder/sampleFile123.txt", "SampleFolder/sampleFile.txt");
        var fileData = fs.readFileSync("SampleFolder/sampleFile.txt");
        console.log(fileData.toString());
        fs.unlinkSync("SampleFolder/sampleFile.txt");
        fs.rmdirSync("SampleFolder");
    }
} else {
    fs.mkdirSync("SampleFolder");
    fs.writeFileSync("SampleFolder/sampleFile.txt", "Hello World!");
}