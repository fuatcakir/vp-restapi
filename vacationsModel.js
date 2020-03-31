var mongoose = require("mongoose");

var vacationSchema = mongoose.Schema({
    tablevacat: [{
        daystart: {
            type: Date,
            required: true
        },
        dayend: {
            type: Date,
            required: true
        },
        vacationcount: {
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
        }
    }],
    sharedesc: {
        type: String,
        required: false
    },
    totalvacationcount :{
        type: Number,
        required: false
    }
}
);

var Vacation = module.exports = mongoose.model('vacations', vacationSchema);

module.exports.get = function (callback, limit) {
    Vacation.find(callback).limit(limit);

}