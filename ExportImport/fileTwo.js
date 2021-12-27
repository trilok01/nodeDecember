const fileOne = require("./fileOne");
const fileThree = require("./fileThree");

console.log(global.userDetails);
var otherData = "Hello There";
try{
    fileOne.getData();
    console.log(fileThree.userName);
} catch(err){
    console.log(err);
}

console.log(otherData);