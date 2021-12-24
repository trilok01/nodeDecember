debugger;

const data = {
    name: 'Trilok',
    age: 21
};

data.name = 'Monu'; // Allowed because no change in memory address

console.log(data.name);
