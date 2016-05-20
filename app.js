'use strict';
const PORT = process.env.PORT || 3008;
var express = require('express');
var app = express();
// var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var connection = mysql.createConnection(process.env.JAWSDB_URL);


// connection.connect();


//app.use(connection);
var routes = require('./routes/routes.js');
var rooms = require('./routes/rooms-api');
app.use(express.static('public'));
app.use('/', routes);
app.use('/rooms', rooms);
app.set('view engine','ejs');
//var connection = mysql.createConnection(
 //   {
  //      host     : 'localhost',
   //     user     : 'root',
 //       password : 'password',
 //       database : 'inventory'
 //   }
//);



app.listen(PORT, err => {
    console.log( err || `Server listening on port ${PORT}` );
});
