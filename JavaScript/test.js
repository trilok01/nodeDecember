function Employee(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;

    //return [name, age];
}

var employeeOne = new Employee('Trilok', 21, 'Trainee');

var employeeTwo = new Employee('Anshul', 31, 'Manager');

var employeeThree = new Employee('Meha', 20, 'Developer');

console.log(employeeOne.name);

debugger;