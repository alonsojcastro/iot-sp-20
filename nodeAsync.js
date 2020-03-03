// Include the async package
// Make sure you add "async" to your package.json
async = require("async");
var task_arr = [{name:'task_1', delay:500},{name:'task_2', delay:300},{name:'task_3', delay:200},];

  
//////////////////////////
////* async.each will execute the task in task array concurrently. */

// async.each(task_arr, function(task, callback){

//         console.log("Execute task : " + task.name);

//         setTimeout(function(){
//             console.log("Task timeout : " + task.name);
//             /* Must invoke the callback function. */ 
//             callback(null, task.name);
//         }, task.delay);

//     },function(error){
//         if(error==undefined)
//         {
//             console.log("No error.");
//         }else
//         {
//             console.log("The error message is " + error);
//         }

//     });

//////////////////////////
////* async.eachSeries Execute every task in task array by order (one by one).

// async.eachSeries(task_arr, function(task, callback){

//     console.log("Execute task : " + task.name);

//     setTimeout(function(){
//         console.log("Task timeout : " + task.name);
//         // Must invoke the callback function, otherwise this function will be executed only with the first item in collection.
//         callback(null, task.name);
//     }, task.delay);

// },function(error){
//     console.log(error);
// });


//////////////////////////
////* async.waterfall
 
// async.waterfall([
//     function(callback) {
//         // 1 will be passed to second function as first parameter. 
//         callback(null, 1);
//     },
//     function(function_one_arg, callback) {
//         console.log("function_one_arg : " + function_one_arg);
//         callback(null, function_one_arg * 2);
//     },
//     function(function_two_arg, callback) {
//         console.log("function_two_arg : " + function_two_arg);
//         callback(null, function_two_arg * 2);
//     },
//     function(function_three_arg, callback) {
//         console.log("function_three_arg : " + function_three_arg);
//         callback(null, function_three_arg * 2);
//     }
// ], function(error, result) {
//     console.log('error: ' + error);
//     console.log('result: ' + result);
// }); 

//////////////////////////
////* async.parallel
 
// async.parallel([
//     function(callback) {
//         console.log("Function one execute");
//         setTimeout(function(){
//             console.log("Function one timeout.")
//             callback('', 'Function one');
//         }, 300);
//     },
//     function(callback) {
//         console.log("Function two execute");
//         setTimeout(function(){
//             console.log("Function two timeout.")
//             callback('', 'Function two');
//         }, 200);
//     },
//     function(callback) {
//         console.log("Function three execute");
//         setTimeout(function(){
//             console.log("Function three timeout.")
//             callback('', 'Function three');
//         }, 100);
//     }
// ], function(error, result) {
//     console.log('error: ' + error);
//     console.log('result: ' + result);
// });
