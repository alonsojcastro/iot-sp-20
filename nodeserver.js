var http = require('http');

//Lets define a port we want to listen to
const PORT=8000;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("This is an example Node Server listening on: http://localhost:%s", PORT);
});


// var http = require('http');
//
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hey! What an awesome zoom meeting!!!\n \nIt was just a dream... ");
// });
//
// // Listen on port 8000, IP defaults to 127.0.0.1
// server.listen(8000);
//
// // Put a friendly message on the terminal
// console.log("Server running at http://127.0.0.1:8000/");
