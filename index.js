var express = require('express');
var app = express();
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var textController = require('./controllers/textController');

app.use(bodyParser.json())


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,accessToken");
    next();
});

app.post('/save',textController.create);
app.get('/getById/:id',textController.getOne);

mongoose.connect('mongodb://localhost:27017/demo',{ useNewUrlParser: true, useUnifiedTopology:true }, function(error) {
    if (error) {
        console.log("Error in connecting to database, Error=> ", error)
        process.exit(1);
    }

    app.listen( 8080, function(err) {
        if (err) {
            process.exit(1);
        }
        console.log("Server started on port: " + 8080);
    })
});