function Employee() {
    var data = 10;
    console.log(data);
}

Employee.prototype.getData = function() {
    console.log('Hello World!');
}

debugger;

Employee.prototype.getData();