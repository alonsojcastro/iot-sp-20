


var fs = require('fs');
fs.readFile('text.txt', function callback(err, data) {
  if (err) {
      console.log('Ahh! An Error!');
      return; 
}
  console.log(data);
});