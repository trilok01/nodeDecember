function modulePattern() {
    var name = 'Trilok';
    var age = 21;

    function getData() {
        console.log(name);
    }

    function getDetail() {
        getData();
    }

    return {
        userName: name,
        getDetail: getDetail
    }
}

var data = modulePattern();

console.log(data.userName);
console.log(data.getDetail());

debugger;