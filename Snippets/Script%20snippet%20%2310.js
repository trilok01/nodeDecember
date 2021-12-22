debugger;

var name = 'Trilok';

function getData() {
    console.log(this.name);
}

var userData = {
    name: 'TechnoFunnel'
};

var userInfo = {
    name: 'Anshul'
};

getData.call(userData);
getData.call(userInfo);
getData();