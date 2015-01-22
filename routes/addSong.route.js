module.exports = function () {
    var express = require('express');
    var app = express();
    app.post("/l", function(req, res){
        console.log(req.body);
        res.end('ok');
    });
    return app;
}();