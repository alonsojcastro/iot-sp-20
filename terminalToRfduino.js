

var prompt = require('prompt');
var SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
var db=0;
var dbcount=0;
var pdb=0;
var blinker=1000;
var sport = new SerialPort('/dev/ttyS0', {
  baudRate: 9600
});
const parser = new Readline();
sport.pipe(parser);
prompt.start();
sport.on('open', function() {





parser.on('data', function (data) {
	
   console.log(data);
    
});
  
   console.log("PORT IS OPEN");

   uprom();
});



function uprom(argument) {
	prompt.get(['data'], function (err, result) {
    // 
    // Log the results. 
    sport.write(result.data+'\n')
    console.log('Command-line input received:');
    console.log('  enter data: ' + result.data);
 uprom()
  });
	
}




sport.on('error', function(err) {
  console.log('Error: ', err.message);
});












