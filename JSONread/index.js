const fs = require('fs');

var fileReaderEmitter = fs.createReadStream("JSONread/employees.json");
var fileData = "";
var employeeList = [];

fileReaderEmitter.on("data", (chunk) => {
    fileData += chunk;
});

fileReaderEmitter.on("end", (chunk) => {
    var data = JSON.parse(fileData.toString());
    //employeeList.push([...data.employees]);

    data.employees.forEach(emp => {
        employeeList.push(emp);
    });

    console.log(employeeList.length);
});