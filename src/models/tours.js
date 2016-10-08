var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TourSchema = new Schema ({
    title: String,
    date: String,
    tickets: String
});

var Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
