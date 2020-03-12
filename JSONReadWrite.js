var fs = require("fs");
var Request = require("request");
/////READING
// let rawdata = fs.readFileSync('myjson.json');  
// let student = JSON.parse(rawdata);  
// console.log(student);


//////fs.readFile
// fs.readFile('myjson.json', (err, data) => {  
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student);
// });

// console.log('This is after the read call');


///////REMOTE REQUEST
// Request.get("http://ayo.io/myjson.json", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     console.dir(JSON.parse(body));
// });



/////WRITING
// let student = {  
//     name: 'Mike',
//     age: 23, 
//     pet: 'lobster',
//     department: 'English',
//     car: 'Honda' 
// };

// let data = JSON.stringify(student);  
// fs.writeFileSync('out.json', data);


//////Using fs.writeFile
// let student = {  
//     name: 'Mike',
//     age: 23, 
//     pet: 'flea',
//     department: 'English',
//     car: 'Honda' 
// };

// let data = JSON.stringify(student, null, 2);

// fs.writeFile('out.json', data, (err) => {  
//     if (err) throw err;
//     console.log('Data written to file');
// });

// console.log('This is after the write call');  
