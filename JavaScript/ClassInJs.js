class Employee {
    constructor(name, id, designation) {
        this.name = name;
        this.id = id;
        this.designation = designation;
    }

    getDetails() {
        console.log('Hello ' + this.name);
    }
}

var employeeOne = new Employee('Trilok', 21, 'Developer');
var employeeTwo = new Employee('Mayank', 32, 'VP');

employeeOne.getDetails();