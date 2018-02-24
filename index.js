console.log("hello world");
var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 5000;
http.listen(port, "0.0.0.0", function () {

    console.log('up and running');
});


app.get("*", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
