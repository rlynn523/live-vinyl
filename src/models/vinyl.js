var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VinylSchema = new Schema ({
    title: String,
    country: String,
    year: String,
    userId: String
});

var Vinyl = mongoose.model('Vinyl', VinylSchema);

module.exports = Vinyl;
