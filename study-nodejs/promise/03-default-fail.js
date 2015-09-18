// rejected callback hung on the root promise object for the chain

var Q = require('q');

// create a new deferred object
var defer = Q.defer();

// get a promise object in the deferred object
var promise1 = defer.promise;

var promise2 = promise1.then(function(rejected){
  return 'fulfilled';
}).fail(function(error) {
  console.log('fail: ' + error);
});

// the return value as the input in the promise chain
promise2.then(function(fulfilled){
  console.log('fulfilled: ' + fulfilled);
},function(rejected){
  console.log('rejected: ' + rejected);
});

defer.reject('rejected');
