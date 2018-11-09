var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
var port = new SerialPort('/dev/ttyS0', {
  baudRate: 9600
});
const parser = new Readline();
port.pipe(parser);
server.listen(8000);

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    port.write('x'+'\n');

parser.on('data', function (data) {
  
});



  socket.on('fromwebclient', function (data) {
    console.log(data.r+","+data.g+","+data.b);
      socket.emit('toscreen', { r: data.r,g:data.g,b:data.b });

  });
});