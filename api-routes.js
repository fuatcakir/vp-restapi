let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API is working!',
        message: 'Welcome to myRest crafted with love.'
    });
});

var vacationsController = require('./vacationsController');

router.route('/vacations')
    // .get(vacationsController.index)
    .post(vacationsController.new);

router.route('/vacations/:vacation_id')
    .get(vacationsController.view);
    // .patch(vacationsController.update)
    // .put(vacationsController.update)
    // .delete(vacationsController.delete);


module.exports = router;

