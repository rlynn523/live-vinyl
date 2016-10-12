var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TourSchema = new Schema ({
    title: String,
    date: {
        type: String,
        unique: true
    },
    tickets: {
        type: String,
        unique: true
    },
    userId: {
        type: String
    }
});

var Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
