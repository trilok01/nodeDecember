var name = 'Trilok';
debugger;

var promiseObj = new Promise(function(resolve, reject) {
    debugger;
    setTimeout(function() {
        var randomNumber = Math.floor(Math.random() * 100);

        if(randomNumber > 59){
            resolve({
                result: "Success",
                value: randomNumber
            });
        } else{
            reject({
                result: "Failure",
                value: randomNumber
            });
        }
    }, 5000);
});

promiseObj.then(function(resolutionData) {
    return {
        message: "The value is as per Expectation",
        value: resolutionData.value + 1000
    }
}, function(rejectionData) {
    return {
        message: "The value is not as per Expectation",
        value: rejectionData.value + 100
    }
}).then((data) => {
    console.log(data);
});

var a = 10;
console.log(a);