module.exports = function () {
    var express = require('express');
    var app = express();
    var songs = models('SongModel');

    app.get("/", function(request, response){
    	return songs.find(function (err, result) {
            if (!err) {
                return response.send(result);
            } else {
                response.statusCode = 500;
                log.error('Internal error(%d): %s', response.statusCode, err.message);
                return response.send({ error: 'Server error' });
            }
        });
    });

    return app;
}();