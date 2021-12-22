function Employee(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
}

function getData() {
    console.log(this.name);
}

var employeeOne = new Employee('Trilok', 21, 'Trainee');

var employeeTwo = new Employee('Anshul', 31, 'Manager');

var employeeThree = new Employee('Meha', 20, 'Developer');

getData.call(employeeOne);
getData.call(employeeTwo);
getData.call(employeeThree);

debugger;