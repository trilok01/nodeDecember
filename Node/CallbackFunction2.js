function callbackFunction() {
    console.log('Hello World!');
}

function otherFunction(fnName) {
    var a = 10;
    if(a == 10) {
        setTimeout(fnName, 1000);
    }
}

otherFunction(callbackFunction);