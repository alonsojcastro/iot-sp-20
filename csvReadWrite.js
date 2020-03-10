const csv = require('csv-parser');  
const fs = require('fs');
const fastcsv = require('fast-csv');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const d3 = require("d3");

/////CVS READ
// fs.createReadStream('CVSTVC.csv')  
//   .pipe(csv())
//   .on('data', (row) => {
//     console.log(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });


////CVS WRITE
// const data = [  
//   {
//     name: 'John',
//     surname: 'Snow',
//     age: 26,
//     subject: 'AI'
//   }, {
//     name: 'Clair',
//     surname: 'White',
//     age: 33,
//     subject: 'Javascript',
//   }, {
//     name: 'Fancy',
//     surname: 'Brown',
//     age: 78,
//     subject: 'Cats'
//   }
// ];

  
// const csvWriter = createCsvWriter({  
//   path: 'out.csv',
//   header: [
//     {id: 'name', title: 'Name'},
//     {id: 'surname', title: 'Surname'},
//     {id: 'age', title: 'Age'},
//     {id: 'subject', title: 'Subject'},
//   ]
// });

// csvWriter  
//   .writeRecords(data)
//   .then(()=> console.log('The CSV file was written successfully'));


//////////////////////CVS fast-csv
// const data = [  
//   {
//     name: 'John',
//     surname: 'Snow',
//     age: 26,
//     subject: 'AI'
//   }, {
//     name: 'Clair',
//     surname: 'White',
//     age: 33,
//     subject: 'Javascript',
//   }, {
//     name: 'Fancy',
//     surname: 'Brown',
//     age: 78,
//     subject: 'Cats'
//   }
// ];

  
// const ws = fs.createWriteStream("out.csv");  
// fastcsv  
//   .write(data, { headers: true })
//   .pipe(ws);


///////TVS READ
// fs.readFile("CVSTVC.tsv", "utf8", function(error, data) {
//   data = d3.tsvParse(data);
//   console.log(data.length);

// for (x in data) {
// console.log(x)
// console.log(data[x])
// }
// });
