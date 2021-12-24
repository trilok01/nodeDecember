const fs = require("fs");

class Employee {
  constructor(id, name, createdAt = "Today", avatar = "https://image.shutterstock.com/image-photo/business-woman-wearing-face-mask-260nw-1768676684.jpg") {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.createdAt = createdAt;
  }
}

class EmployeeReader {
    constructor() {
        this.empList = []
    }

    readEmployeeList(fileName, callbackFunction) {
        fs.readFile(fileName, (err, data) => {
            if(err) {
                callbackFunction(err, null);
            } else {
                var employeesData = JSON.parse(data.toString());
                employeesData.managers.forEach((a) => {
                    var newEmployee = new Employee(a.name, a.id);
                    this.empList.push(newEmployee);
                })

                callbackFunction(null, this.empList);
            }
        })
    }
}

var reader = new EmployeeReader();
reader.readEmployeeList("EmployeeDetails/employeeDetails.json", (err, data) => {
    if(err) {
        console.log("Error Condition")
    } else {
        console.log(data)
    }
})
debugger;