var mongoose = require("mongoose");

var vacationSchema = mongoose.Schema({
    daystart: {
        type: Date,
        required: true
    },
    dayend: {
        type: Date,
        required: true
    },
    vacationCount: {
        type: Number,
        required: false
    },
    holidaycount: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    sharedesc: {
        type: String,
        required: false
    }
}
);

var Vacation = module.exports = mongoose.model('vacations', vacationSchema);

module.exports.get = function (callback, limit) {
    Vacation.find(callback).limit(limit);

}