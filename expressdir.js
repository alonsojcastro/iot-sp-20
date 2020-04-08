var express = require('express');
var path=require('path');
var app = express();
var url = "localhost"
var port = 8000

app.use('/',express.static(path.join(__dirname,'public')));

app.get('/test', function (req, res) {
  res.send('Studio X!'); });

  app.listen(port);
  console.log(url+" listening on port "+ port)
