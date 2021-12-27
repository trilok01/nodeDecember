var fs = require("fs");
var EventEmitter = require("events");
var emitter = new EventEmitter()

fs.readFile("FileReaderEvents/employees.json", (err, data) => {
    if(err) {
        console.log("Error reading File Content...")
    } else {
        var empList = JSON.parse(data).employees;
        emitter.emit("employeeList", empList)
    }
});

module.exports.emitter = emitter;