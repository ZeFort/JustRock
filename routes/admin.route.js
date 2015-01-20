module.exports = function () {
    var express = require('express');
    var app = express();
    app.get("/getPass", function(req, res){
        res.send("getPass");
    });
    app.get("/", function(req, res){
        res.send("Admin");
    });
    return app;
}();
