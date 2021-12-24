var fs = require('fs');

var data = fs.readFileSync("./JavaScript/enhancement.txt");

var filestring = data.toString();

console.log(filestring);

debugger;