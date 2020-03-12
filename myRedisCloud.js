var fs = require("fs");
var d3 = require("d3");
var _ = require("lodash");
var redis = require('redis');
var client = redis.createClient(14030, 'redis-14030.c73.us-east-1-2.ec2.cloud.redislabs.com', {no_ready_check: true});
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');

client.auth('-', function (err) {
    if (err) throw err;
});

///CONNECTION
client.on('connect', function(err) {
    // console.log('connected');
});



// ///GET KEY:FRAME
// client.get('name', function(err, reply) {
//     console.log(reply);
// });


// ////GET HASH
// client.hgetall('0', function(err, object) {
//     console.log(object);
// });


// client.exists('0', function(err, reply) {

//     if (reply === 1) {
//         console.log('exists');
//     } else {
//         console.log('doesn\'t exist');
//     }
// });
