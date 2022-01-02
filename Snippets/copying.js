var emp = {
    name: "abc",
    age: 20,
    salary: 10
}

var newEmployee = {
    ...emp,
    address: "xyz"
}

console.log(newEmployee);

// ... will not referenct to the same address
// It will create a copy at a new address
// ... is called spread Operator