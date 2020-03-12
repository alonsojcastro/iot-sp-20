var fs = require("fs");
///READING
fs.readFile("temp.txt", function(err, buf) {
  console.log(buf.toString());
});

//////Handling Errors - you can call the file whatever you want but make sure you always look for it and have an error handler
// fs.readFile("not-found.txt", "utf-8", (err, data) => {
//     if (err) { console.log(err) }
//     console.log(data);
// });


/////WRITING
// var data = "Adding some content to this file and this is my poem";
//
// fs.writeFile("temp.txt", data, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
// });

// 'a' means appending (old data will be preserved)
// var logger = fs.createWriteStream('temp.txt', {
//   flags: 'a'
// })
//
// // append string to your file
// logger.write('' + 'some data' + '')
//
// // again
// logger.write('more data')
//
// // again
// logger.write('and more')
