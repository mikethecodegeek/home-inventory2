var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var connection = mysql.createConnection(
 //   {
  //      host     : 'localhost',
  //      user     : 'root',
   //     password : 'password',
   //     database : 'inventory'
   // }
//);
// var connection = mysql.createConnection(process.env.JAWSDB_URL);
var connection = mysql.createConnection(
    process.env.JAWSDB_URL ||
    {
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'inventory'
    }
);
// var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();
//connection.connect();




module.exports = (function() {
    'use strict';
    var router = require('express').Router();

    router.get('/', function(req, res) {
        // connection.connect();
        //res.json('items-api');
        //require('../models/items');
        var queryString = 'SELECT * FROM rooms';

        connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;
            res.send(rows);
            for (var i in rows) {
                //    res.send(rows);
            }
        });
        //connection.end();
    });

    router.post('/', function(req, res) {
        //res.json('items-api');
        //require('../models/items');
        console.log(req.body.roomname);
        var roomname = req.body.roomname;
        var queryString = 'insert into rooms (roomname) values ("'+roomname+'")';

        connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;
            res.send(rows);

            for (var i in rows){
                // console.log('Post Titles: ', rows[i].post_title);
            };
        });
        //  connection.end();
    });
    router.put('/', function(req, res) {
        //res.json('items-api');
        //require('../models/items');
        var id = req.body.id;
        var roomname = req.body.roomname;
        var queryString = 'update rooms set roomname="'+roomname+'" where id='+id,roomname;
        //  'update student set assignment=? where id='+thisid,req.body.assignment);
        connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;
            res.send(rows);

            for (var i in rows){
                // console.log('Post Titles: ', rows[i].post_title);
            };
        });
        // connection.end();
    });
    router.delete('/', function(req, res) {
        //res.json('items-api');
        //require('../models/items');
        var id = req.body.id;
        var roomname = req.body.roomname;
        var queryString = 'delete from rooms where id='+id;
        //  'update student set assignment=? where id='+thisid,req.body.assignment);
        connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;
            res.send(rows);

            for (var i in rows){
                // console.log('Post Titles: ', rows[i].post_title);
            };
        });
        //  connection.end();
    });

return router;
})();