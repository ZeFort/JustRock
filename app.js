var express = require('express')
var app = express()
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/justrock');
global.Model = require('./models')();


app.use('/', require('./routes/landing.route'));
app.use('/admin', require('./routes/admin.route'));
app.use('/player', require('./routes/player.route'));


var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
})