var express = require('express')
var path = require('path');
var mongoose = require('mongoose');
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
mongoose.connect('mongodb://localhost/justrock');
global.models = require('./models')();
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./routes/landing.route'));
app.use('/admin', require('./routes/admin.route'));
app.use('/addSong', require('./routes/addSong.route'));
app.use('/music', require('./routes/music.route'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('HTTP Server: ', host,':', port);
})