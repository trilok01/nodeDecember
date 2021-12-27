var fs = require("fs");

var fileData = fs.readFileSync("FileReader/employees.json");

var empList = JSON.parse(fileData).employees;

console.log(empList);

module.exports.empList = empList;