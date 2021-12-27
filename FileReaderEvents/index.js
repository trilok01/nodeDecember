
var emitter = require("./fileReader").emitter;

var handlerForHr = require("./hrSalaryTotal");
var handlerForLog = require("./logUserName");

handlerForHr.attachEventHandler(emitter);
handlerForLog.attachEventHandler(emitter);