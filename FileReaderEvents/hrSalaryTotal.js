var salarySum = 0;

function attachEventHandler(emitterObj) {
    emitterObj.on("employeeList", (empList) => {
        empList.forEach(element => {
            salarySum = salarySum + element.salary
        });
    
        console.log(salarySum);
    })
}

module.exports.attachEventHandler = attachEventHandler;

