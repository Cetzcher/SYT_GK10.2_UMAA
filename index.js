 // server.js
 var express = require('express');
 var app = express();
 var port = process.env.PORT || 4020;
 
 // start the server
 app.listen(port, function() {
   console.log('app started');
 });
 
 // route our app
 app.get('/', function(req, res) {
   res.send('hello world!');
 });