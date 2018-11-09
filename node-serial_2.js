
var SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
var port = new SerialPort('/dev/ttyS0', {
  baudRate: 9600
});
const parser = new Readline();
port.pipe(parser);

port.on('open', function() {





parser.on('data', function (data) {
   console.log(data);
    // if ((data[0]=="~") && (data[1]=="A")&& (data[2]=="~")){
    //  // console.log("N");
    //  // port.write('A');   
    // }

    // console.log(data);
});
  
   console.log("PORT IS OPEN");
});


// setInterval(function(){ 
// port.write('hello from pi\n', function(err) {
//   if (err) {
//     return console.log('Error on write: ', err.message);
//   }
//   console.log('message written');
// });
// }, 3000);


port.on('error', function(err) {
  console.log('Error: ', err.message);
})
// port.on('data', function (data) {

//   //   parser.on('data', console.log);
//   console.log("kkk");
// });
 
// Read data that is available but keep the stream from entering "flowing mode" 
// port.on('readable', function () {
//   console.log('Data:', port.read());
// });












