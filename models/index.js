var models = {};
var getModel = function (modelName) {
    if (modelName in models) {
        return models[modelName];
    }
    throw new Error('Cannot find model: ' + modelName);
};
var initModels = function () {
    var fs = require('fs'), path = require('path'), NOT_MODEL = ['index'];
    fs.readdirSync('./models').filter(function (filename) {
        return !~NOT_MODEL.indexOf(path.basename(filename, '.js'));
    }).forEach(function (filename) {
        var modelName = path.basename(filename, '.js');
        models[modelName] = require('./' + modelName);
    });
};
module.exports = function () {
    initModels();
    return getModel;
};