module.exports = function () {
    var express = require('express');
    var app = express();
    app.get("/", function(req, res){
    });
    return app;
}();