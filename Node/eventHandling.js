const eventEmitter = require("events");

var customEvent = new eventEmitter();

customEvent.on("taskDone", () => {
    console.log("Hello World!");
});

customEvent.on("taskDone", () => {
    console.log("Hello World!");
});

customEvent.on("taskDone", () => {
    console.log("Hello World!");
});

customEvent.on("taskDone", () => {
    console.log("Hello World!");
});

customEvent.emit("taskDone", {});

var name = "Trilok";

console.log(name);