var name = "Trilok";

function getData(){
    console.log("Hello from the function");
}

module.exports.name = name;
module.exports.getData = getData;

global.userDetails = {
    userName: "Trilok",
    designation: "Trainee"
}
