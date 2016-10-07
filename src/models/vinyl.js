var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VinylSchema = new Schema ({
    title: {
        type: String,
    }
});

var Vinyl = mongoose.model('Vinyl', VinylSchema);

module.exports = Vinyl;
