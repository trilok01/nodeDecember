debugger;

const data = 'TechnoFunnel';
data = 'changed'; // Not allowed because memory address is changed

const salaryArray = [10, 20, 30, 40];

salaryArray.push(50);
salaryArray[0] = 100;
// No error because memory address is not changed.

salaryArray = [10, 20, 30, 40]; // Error because memory address is changed.

console.log(salaryArray.length);
