var name = 'Trilok';
debugger;

var promiseObj = new Promise(function(resolve, reject) {
    debugger;
    setTimeout(function() {
        if(name == 'Trilok'){
            resolve("The Promise is Resolved, Let's go for a Ride...");
        } else {
            reject("The Promise is Rejected, Let's go some other day...");
        }
    }, 5000);
});

promiseObj.then(function(resolutionData) {
    debugger;
    console.log(resolutionData);
}, function(rejectionData) {
    debugger;
    console.log(rejectionData);
});

promiseObj.then(function(resolutionData) {
    debugger;
    var a = 10;
    console.log(a)
}, function(rejectionData) {
    var a = 20;
    console.log(a)
})

promiseObj.then(function(resolutionData) {
    debugger;
    var b = 100;
    console.log(b)
}, function(rejectionData) {
    var b = 1000;
    console.log(b)
})

var a = 10;
console.log(a);