module.exports = function () {
    var express = require('express');
    var app = express();
    app.post("/l", function(req, res){
        console.log(req.body, req.params, req.data, req.query);
        res.end();
    });
    return app;
}();