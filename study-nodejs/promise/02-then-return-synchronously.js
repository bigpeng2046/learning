// then also creates a promise object in the chain of promise 
// if the registered callbacks return something synchronously, 
// the values become the input of the created promise's callbacks
// in the chain

var Q = require('q');

var defer = Q.defer();
var promise1 = defer.promise;

// return synchronously
var promise2 = promise1.then(function(fulfilled){
  return 'fulfilled'; 
},function(rejected){
  return 'rejected';
});

// the return value as the input in the promise chain
promise2.then(function(fulfilled){
  console.log('fulfilled: ' + fulfilled);
},function(rejected){
  console.log('rejected: ' + rejected);
});

defer.reject();  // rejected in promise1 -> fulfilled in promise2
defer.resolve(); // fulfilled in promise1 -> fulfilled in promise2
