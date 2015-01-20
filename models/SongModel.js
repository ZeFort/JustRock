var mongoose = require('mongoose');
var SongSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    album: {
        type: String,
        default: ''
    },
    artist: {
        type: String,
        default: ''
    },
    cover: {
        type: String,
        default: ''
    },
    path: {
        type: String,
        default: ''
    }
});
var SongModel = mongoose.model('Song', SongSchema);
module.exports = SongModel;
