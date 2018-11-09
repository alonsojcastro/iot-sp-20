
var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyS0', {
  baudRate: 9600
});

 
port.write('hello from pi \n', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});
 
// Open errors will be emitted as an error event 
port.on('error', function(err) {
  console.log('Error: ', err.message);
})





