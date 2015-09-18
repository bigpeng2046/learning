var Q = require('q');

var defer = Q.defer();
var promise1 = defer.promise;

// no rejected callback
var promise2 = promise1.then(function(rejected){
  return 'fulfilled';
});

// the return value as the input in the promise chain
promise2.then(function(fulfilled){
  console.log('fulfilled: ' + fulfilled);
},function(rejected){
  console.log('rejected: ' + rejected);
});

defer.reject('rejected');
