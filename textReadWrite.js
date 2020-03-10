var fs = require("fs");
/////READING
fs.readFile("temp.txt", function(err, buf) {
  console.log(buf.toString());
});

//////Handling Errors
// fs.readFile("not-found.txt", "utf-8", (err, data) => {
//     if (err) { console.log(err) }
//     console.log(data);
// });


/////WRITING
// var data = "New File Contents";

// fs.writeFile("temp.txt", data, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
// });
