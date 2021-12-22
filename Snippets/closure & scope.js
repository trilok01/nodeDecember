var userName = "Ankit";
var userAge = 10;

function getData() {
    var userName = "Mayank";
    console.log(userName);
    console.log(userAge);

    function getInfo() {
        var userDesignation = "Developer";
        console.log(userName);
        console.log(userAge);
        console.log(userDesignation);
    }

    getInfo();
}

getData();

console.log(userName);




// Closure: Capability of a function to access the variable of parent scope
// Closure: Capability to remember the details of environment where it is created