const express = require('express');

var app = express();

app.get("/", (hreq, res) => {
    res.send("Hello World from express");
    res.end();
});

app.get("/home", (hreq, res) => {
    res.write("Hello world from Home...");
    res.end();
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
})