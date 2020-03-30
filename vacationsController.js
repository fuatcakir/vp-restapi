Vacation = require("./vacationsModel");

exports.index = function (req, res) {
    Vacation.get(function (err, vacations) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }

        res.json({
            status: "succes",
            message: "Vacations retrieved data succesfully",
            data: vacations
        });

    });
};

exports.new = function (req, res) {
    var vacation = new Vacation();
    vacation.daystart = req.body.daystart;
    vacation.dayend = req.body.dayend;
    vacation.vacationcount = req.body.vacationcount;
    vacation.holidaycount = req.body.holidaycount;
    vacation.description = req.body.description;
    vacation.sharedesc = req.body.sharedesc;

    vacation.save(function (err) {
        if (err)
            res.json(err);
        else 
        res.json({
            message: 'New vacation created!',
            data: vacation
        });
    });
};

exports.view = function (req, res) {
    Vacation.findById(req.params.vacation_id, function (err, vacation) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Vacation detail loading...',
            data: vacation
        });
    });
};

exports.update = function (req, res) {
    Vacation.findById(req.params.vacation_id, function (err, vacation) {
        if (err) {
            res.send(err);
        }
        vacation.dayStart = req.body.daystart;
        vacation.dayend = req.body.dayend;
        vacation.vacationcount = req.body.vacationcount;
        vacation.holidaycount = req.body.holidaycount;
        vacation.description = req.body.description;
        vacation.sharedesc = req.body.sharedesc;
        vacation.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: "The vacation updated!",
                data: vacation
            });
        })
    });
};

exports.delete = function (req, res) {
    Vacation.remove({
        _id: req.params.vacation_id
    }, function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            status: 'succes',
            message: 'vacation deleted'
        });
    });
};