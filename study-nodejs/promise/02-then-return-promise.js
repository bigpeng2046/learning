// how to deal with async calls in the registered callbacks
// in a promise

var Q = require('q')
  , fs = require('fs');

var defer = Q.defer();

// then return a promise object in the deferred object
var promise1 = defer.promise;

var promise2 = promise1.then(function(fulfilled){
  var d = Q.defer();   // create a new deferred object
  fs.readFile('sample01.txt', 'utf8', function(err, data){
    if(!err && data) {
      d.resolve(data); // notify the deferred object
    }
  });
  return d.promise;    // return the promise in the deferred object
}, function(rejected){
  throw new Error('rejected');
});

// the return value as the input in the promise chain
promise2.then(function(fulfilled){
  console.log(fulfilled);
},function(rejected){
  console.log(rejected);
});

// defer.reject();
defer.resolve();
