module.exports = function () {
    var express = require('express');
    var app = express();    
    var Songs = models('SongModel');

    app.post("/create", function(req, res){
    	var data = req.body || {};
    	var name = data.name;
    	var album = data.album;
    	var artist = data.artist;
    	var cover = data.cover;
    	var song = data.song;

    	var song = Songs({
			name: name,
    		album: album,
    		artist: artist,
    		cover: cover,
    		song: song
        });
        song.save(function(err) {
        	if (!err) res.end('ok');
        	else {
        		console.log(err);
        		res.end('fail');
        	}
        });
    });
    return app;
}();