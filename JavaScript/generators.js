/* function normalFunction() {
    var a = 10;
    var b = 20;
    return {
        a: a,
        b: b
    }
}

var data = normalFunction(); */

function* dataGenerator() {
    let x = 1;
    yield x + 1;    // Instead of return yield is used to return value in generator
    x = 40;
    yield x + 10;
    x = 0;
    yield x + 30;
}

var data = dataGenerator();

var userValue = data.next();

var userValue1 = data.next();

var userValue2 = data.next();

var userValue3 = data.next();

debugger;
