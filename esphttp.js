var prompt = require('prompt');
var request = require('request');
var http = require('http');

var options = {
host:'192.168.1.6',
port:80,
path:'/LED=BLINK'
};

var options2 = {
  host: '192.168.1.6',
  port: 80,
  path: '/LED=ON'
};

var options3 = {
  host: '192.168.1.6',
  port: 80,
  path: '/LED=OFF'
};

prompt.start();


prompt.get(['LED'], function(err, result) {

if(result.LED == 'blink'){

  
  http.get(options, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});

}

if(result.LED == 'on'){
http.get(options2, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
}

if(result.LED == 'off'){

http.get(options3, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
}
}); 


