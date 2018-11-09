var fs = require('fs');
var redis = require('redis');
var client = redis.createClient(14556, 'redis-14556.c15.us-east-1-2.ec2.cloud.redislabs.com', {no_ready_check: true});
var Cryptr = require('cryptr');
    

client.on('connect', function() {
    console.log('Connected to Redis');
});

var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('artifacts.tsv');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var path = "Test.txt";
var data = "Hello from the Node writeFile method!";
var g=[]
var final=[]
var gl=0
var ff=2000



var cryptr = new Cryptr('myTotalySecretKey');


rl.on('line', function(line) {
	
	j=line.split('\t')
	var t= 	{'artid':cryptr.encrypt(j[0]), 'fname':cryptr.encrypt(j[1]), 'artimg':cryptr.encrypt(j[2]), 'artdes':cryptr.encrypt(j[3]), 'art3d':cryptr.encrypt(j[4]), 'artvid':cryptr.encrypt(j[5]), 'artimgs':cryptr.encrypt(j[6])}	

final.push(t)
// console.log(t.fname)
	 		// "'glossary':{'artid':'j[0]', 'fname':j[1], 'artimg':j[2], 'artdes':j[3], 'art3d':j[4], 'artvid':j[5], 'artimgs':j[6]}")

 		// final[gl]=(cryptr.encrypt({'artid':j[0], 'fname':j[1], 'artimg':j[2], 'artdes':j[3], 'art3d':j[4], 'artvid':j[5], 'artimgs':j[6]}))
// console.log(final[gl])
// var decryptedString = cryptr.decrypt(final[gl].glossary)
//     console.log(decryptedString)

gl++

  // var j=line.split("\t")


// client.hmset('ages2', 'toby', j[0], 'jordan', '40', 'ayo', '24');


//   data=("artid "+j[0]+", fname "+j[1]+", artimg "+j[2]+", artdes "+j[3]+", art3d "+j[4]+", artvid "+j[5]+", artimgs "+j[6])
 
//  fs.appendFile('message.txt', data, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });



});

rl.on('close', function() {
	// console.log(final[6])
	for (var i = 0; i < final.length; i++) {
		
	 // console.log(final[i])
	  // var encryptedString = cryptr.encrypt(final[i])
    var decryptedString = cryptr.decrypt(final[i].artimgs)
    console.log(decryptedString)

      client.hmset(i, {
	'artid': cryptr.decrypt(final[i].artid), 
	'artimgs': cryptr.decrypt(final[i].artimgs), 
	'artimg': cryptr.decrypt(final[i].artimg), 
	'artdes': cryptr.decrypt(final[i].artdes),
	'art3d': cryptr.decrypt(final[i].art3d),
	'artvid': cryptr.decrypt(final[i].artvid),
	'fname': cryptr.decrypt(final[i].fname),
	'lname': '30'
});
	  
	}
  
});