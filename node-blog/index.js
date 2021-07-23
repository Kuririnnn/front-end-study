var express = require('express');
var app = express();
var server = app.listen(8888, function() {
    console.log("server is running on http://localhost:8888");
});