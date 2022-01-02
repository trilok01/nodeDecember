var MongoDB = require("mongodb");
var mongoClient = MongoDB.MongoClient;
var fs = require("fs");

var connectionString = "mongodb+srv://technofunnel:technofunnel123@cluster0.1m940.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoClient.connect(connectionString, (err, dbConnection) => {
    if(err) {
        console.log("Error Connecting to Database")
    } else {
        console.log("Connection Created...");

        var employeeDatabase = dbConnection.db("employee");

        fs.readFile(__dirname + "/employees.json", (err, data) => {
            var employeesData = JSON.parse(data.toString());

            employeeDatabase.collection("employees").insertMany(employeesData, (err, data) => {
                if(err) {
                    console.log("Error Saving Record..");
                } else {
                    console.log("Entry Added...")
                    dbConnection.close();
                }
            })
        })
    }
})