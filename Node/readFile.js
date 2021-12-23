debugger;

var fs = require("fs");

fs.readFile('../nodeDecember/JavaScript/enhancement.txt', (err, data) => {
    debugger;
    
    if(err){
        console.log(err);
    }
    else{
        console.log('Success');
        console.log(data.toString);
    }
});

debugger;

var a = 10;
console.log(a);