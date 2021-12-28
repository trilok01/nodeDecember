const http = require('http');

var server = http.createServer();

server.on("request", (req, res) => {
    res.write("Hello World!");
    res.end();
})

server.listen(8000);