const fs = require('fs');

function readEmployeeList(fileDetails) {
    fs.readFile(fileDetails, (err, data) => {

        var employeeClassObjectList = [];

        if(err) {
            console.log('Error Reading File...');
        } else {
            var jsonDataString = data.toString();
            var employeeObject = JSON.parse(jsonDataString);
            var employeeList = employeeObject.employees;
            employeeList.forEach(employee => {
                var newEmployee = new Employee(employee.name, employee.id, employee.createdAt, employee.avatar);
                employeeClassObjectList.push(newEmployee);
            })
        }
        console.dir(employeeClassObjectList);
    });
}

readEmployeeList("EmployeeDetails/employeeDetails.json");

class Employee {
    constructor(name, id, createdAt, avatar) {
        this.name = name;
        this.id = id;
        this.createdAt = createdAt;
        this.avatar = avatar;
    }
}