var fs = require("fs");

var promiseObj = new Promise(function(resolve, reject) {
    fs.readFile('../nodeDecember/JavaScript/enhancement.txt', (err, data) => {
        if(err){
            reject({
                message: "Error in Reading or Accessing file"
            });
        }
        else{
            resolve({
                message: "File Accessed Successfully",
                value: data
            });
        }
    });
});


promiseObj.then(function(resolutionData) {
    console.log(resolutionData.value.toString());
}, function(rejectionData) {
    console.log(rejectionData);
});
