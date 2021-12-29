const http = require('http');
const process = require('process');
const fs = require('fs');

var port = process.env.PORT || 8000;

var server = http.createServer();

server.on("request", (req, res) => {
    if(req.url === "/") {
        fs.readFile(__dirname + "/index.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    } else if(req.url === "/home") {
        fs.readFile(__dirname + "/home.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    } else if(req.url === "/help") {
        fs.readFile(__dirname + "/help.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    } else if(req.url === "/about") {
        fs.readFile(__dirname + "/about.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    } else if(req.url === "/techno") {
        http.get("http://technofunnel.in/", (responseStream) => {
            var dataResponse = "";
            responseStream.on("data", (data) => {
                dataResponse += data;
            });

            responseStream.on("end", () => {
                console.log("Data Reading in Progress");
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(dataResponse);
                res.end();
            })
        });

    } else {
        res.end("URL not correct");
    }
    
});

server.listen(port, () => {
    console.log("Listening on Port no " + port);
});