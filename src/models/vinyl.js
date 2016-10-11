var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VinylSchema = new Schema ({
    title: {
        type: String,
        unique: true
    },
    country: {
        type: String,
        unique: true
    },
    year: {
        type: String,
        unique: true
    },
});

var Vinyl = mongoose.model('Vinyl', VinylSchema);

module.exports = Vinyl;
