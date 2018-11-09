
var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyS0', {
  baudRate: 9600
});
 var prompt = require('prompt');

   prompt.start();

toarduino()

 

function toarduino() {
	prompt.get(['name', 'value'], function (err, result) {
    // 
    // Log the results. 
    // 
    var mes= result.value+'\n'
    port.write(mes, function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
  toarduino()
});
    
  });
}


// Open errors will be emitted as an error event 
port.on('error', function(err) {
  console.log('Error: ', err.message);
})





