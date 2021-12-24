const fs = require('fs');

function readFileContentAsync(fileName) {
    var newPromiseForFileContent = new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(fileName, function(err, data) {
                if(err){
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }, 1000);
    });
    return newPromiseForFileContent;
}

/* function getFileContent() {
    var returnedPromise = readFileContentAsync("./JavaScript/enhancement.txt");
    returnedPromise.then(function(data) {
        var stringData = data.toString();
    }, function(err) {
        console.log(err);
    })
} */

async function getFileContent() {
    var returnedPromise = readFileContentAsync("./JavaScript/enhancement.txt");
    var data = "";
    try {
        data = await returnedPromise;
    } catch(err){
        console.log("Error Handled...");
    }
    console.log(data.toString());
    console.log("Trilok");
    console.log("Hello World!");
}

getFileContent();