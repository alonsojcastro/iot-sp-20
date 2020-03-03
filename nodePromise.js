///// https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async
const weather = false


////// If weather is true, resolve the promise returning the data dateDetails, else return an error object with data Bad weather, so no Date.
const date    = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };

    console.log(dateDetails)
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});


// const myDate = function() {
//   date
//   .then(function(done) {
//       console.log('We are going on a date!')
//       console.log(done)
//     })
//     .catch(function(error) {
//         console.log(error.message)
//     })
// }

// myDate();
