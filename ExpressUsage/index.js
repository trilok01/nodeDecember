var express = require("express");
var fs = require("fs");

var app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/employees", (req, res) => {
    fs.readFile(__dirname + "/employees.json", (err, data) => {
        res.json(JSON.parse(data.toString()));
    })
})

app.get("/employees/details", (req, res) => {
    fs.readFile(__dirname + "/employees.json", (err, data) => {
        res.json(JSON.parse(data.toString()));
    })
})

app.get("/employees/:empId/:userSalary", (req, res) => {
    console.log(req.params.empId);
    fs.readFile(__dirname + "/employees.json", (err, data) => {
        var employeesData = JSON.parse(data.toString());
        var filteredEmployee = employeesData.filter((emp) => {
            return emp.id == req.params.empId;
        });

        if(filteredEmployee.length == 0) {
            res.end("No employee exist");
        }
        res.json({
            ...filteredEmployee,
            salary: req.params.userSalary
        });
    });
});

app.get("/employees/render/:empId", (req, res) => {
    res.sendFile(__dirname + "/employeeDetails.html");
});

app.get("/employees/:empId", (req, res) => {
    console.log(req.params.empId);
    fs.readFile(__dirname + "/employees.json", (err, data) => {
        var employeesData = JSON.parse(data.toString());
        var filteredEmployee = employeesData.filter((emp) => {
            return emp.id == req.params.empId;
        });

        if(filteredEmployee.length == 0) {
            res.end("No employee exist");
        }
    });
});

app.listen(8000, () => {
    console.log("Server Started Working...")
});