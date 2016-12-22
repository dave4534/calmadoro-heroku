var express = require('express');
var bodyParser = require('body-parser');

// mongoose.connect('mongodb://localhost/calmadoro-db');
// mongoose.connect(process.env.MONGOLAB_PINK_URI ||'mongodb://localhost/calmadoro-db');

var app = express();

//parse application/json
app.use(bodyParser.json());   // This is the type of body we're interested in
// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//connect public folder to server
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || '4000');

