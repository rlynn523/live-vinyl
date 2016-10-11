var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TourSchema = new Schema ({
    title: {
        type: String,
        unique: true
    },
    date: {
        type: String,
        unique: true
    },
    tickets: {
        type: String,
        unique: true
    },
});

var Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
