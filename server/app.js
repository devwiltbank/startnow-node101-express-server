 /**********************\
 * Created by DW        *
 * dev.w@gmx.com        *
 * 08/22/2018           *
 *                      * 
 \**********************/
// Had to add extra files to the public directory (client).  Should be able to avoid this.

// import files and packages up here
var express        = require('express');
var data           = require('./data.json');
var app            = express();

// add request id and get morgan
var morgan         = require('morgan');
app.use(express.static('client'));


// add your routes and middleware below
app.get('/devw', function(req, res) {
        res.json(data);
});

// This is the route that shows my top spots page.
app.get('/data', function(req, res) {
        res.status(200).json(data);
});



// finally export the express application
module.exports      = app;
