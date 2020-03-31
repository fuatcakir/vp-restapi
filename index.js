let express = require("express");
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require('./api-routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(bodyParser.json());

const uri = process.env.MONGODBURI;
mongoose.connect(uri, { useNewUrlParser: true ,useUnifiedTopology: true });


// const urilocal ='mongodb://localhost/vacationplans';
// mongoose.connect(urilocal, { useNewUrlParser: true });
 
var db = mongoose.connection;

if (db) {
    console.log('DB connected succesfuly');
} else {
    console.log('error connecting DB');
}

var port = process.env.PORT || 3000;

app.get('/', (req, resp) => resp.send('my simple rest api'));

app.use('/api', apiRoutes);
app.listen(port, function () {
    console.log("running res api on :" + port);
});



