// async programming pattern: promise/deferred
// basic concepts
//   1. a promise has three status: progress, fullfilled and rejected
//   2. transition between status: progress -> fullfilled, progress -> rejected
//   3. the transition happens one time only

var Q = require('q');

// create a deferred object
var defer = Q.defer();

// get the promise object in the deferred object
var promise = defer.promise;

// register callbacks for a promise object with then(fufilled, rejected, progress)
promise.then(function(fulfilled){
  console.log(fulfilled);
},function(rejected){
  console.log(rejected);
},function(progress){
  console.log(progress);
});

// triger the defer object with a different state
defer.notify('in progress'); // progress
defer.resolve('resolve');    // fulfilled
defer.reject('reject');      // rejected
