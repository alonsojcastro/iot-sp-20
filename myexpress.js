var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Welcome to Studio X"); });

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('This is an example App listening at http://%s:%s', host, port);
});
