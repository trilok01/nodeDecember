import process from 'process';
import fs from 'fs';

process.on("exit", () => {
    console.log("Exiting...");
});

process.on("uncaughtException", (err) => {
    console.log("Do Something");
});

var data = fs.readFile("Queries/FileReading.txt", (err, data) => {
    if(err) {
        throw "Uncaught Data"
    } else {
        console.log(data);
    }
});

console.log(data.toString());