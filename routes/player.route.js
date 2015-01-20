module.exports = function () {
    var express = require('express');
    var app = express();
    app.get("/", function(req, res){
        res.send("Player");
    })
    return app;
}();