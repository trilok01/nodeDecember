var empList = require("./index").empList;

var salarySum = 0;
empList.forEach(element => {
    salarySum += element.salary;
})

console.log(salarySum);