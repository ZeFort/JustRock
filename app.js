var express = require('express')
var app = express()



app.use('/', require('./routes/landing.route'));

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
})