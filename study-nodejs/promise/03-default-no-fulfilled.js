var Q = require('q');

var defer = Q.defer();
var promise1 = defer.promise;

// no fulfilled callback
var promise2 = promise1.then(null, function(rejected){
  return 'rejected';
});

// the return value as the input in the promise chain
promise2.then(function(fulfilled){
  console.log('fulfilled: ' + fulfilled);
},function(rejected){
  console.log('rejected: ' + rejected);
});

defer.resolve('fulfilled');
