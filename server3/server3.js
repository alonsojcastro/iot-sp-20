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
  var indata = data.split(",")
  if(indata.length>2){
	x=indata[0]
	y=indata[1]
	z=indata[2]
	console.log(data)
    // port.write('x'+'\n');

  socket.emit('fromserver', { x: indata[0],y:indata[1],z:indata[2] });}
});

 socket.on('slider', function (data) {
    console.log("SLIDER ="+data.s);
    port.write(data.s.toString()+'\n')

  });

  socket.on('fromwebclient', function (data) {
    console.log(data.r+","+data.g+","+data.b);
      socket.emit('toscreen', { r: data.r,g:data.g,b:data.b });

  });
});