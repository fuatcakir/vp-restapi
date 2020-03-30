let express = require("express");
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require('./api-routes');

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json())

const uri = "mongodb+srv://fuatcakir:MB_41hf414@clusterfc-3xfqs.mongodb.net/vacationplans?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true ,useUnifiedTopology: true });

// const urilocal ='mongodb://localhost/vacationplans';
// mongoose.connect(urilocal, { useNewUrlParser: true });
 
var db = mongoose.connection;

if (db) {
    console.log('DB connected succesfuly');
} else {
    console.log('error connecting DB');
}

var port = process.env.port || 3000;

app.get('/', (req, resp) => resp.send('my simple rest api'));

app.use('/api', apiRoutes);
app.listen(port, function () {
    console.log("running res api on :" + port);
});



