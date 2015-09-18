var Q = require('q');

var defer = Q.defer();

// then return a promise object
var promise1 = defer.promise;

var promise2 = promise1.then(function(fulfilled){
  throw new Error('fulfilled');
},function(rejected){
  throw new Error('rejected');
});

// the return value as the input in the promise chain
promise2.then(function(fulfilled){
  console.log('fulfilled: ' + fulfilled);
},function(rejected){
  console.log('rejected: ' + rejected);
});

defer.reject();  // rejected in promise1 -> rejected in promise2
defer.resolve(); // fulfilled in promise1 -> rejected in promise2
