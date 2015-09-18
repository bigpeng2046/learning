// make asynchronous calls into synchronous call chain

var Q = require('q')
  , fs = require('fs');

function printFileContent(fileName) {
  var defer = Q.defer();
  fs.readFile(fileName, 'utf8', function(err,data) {
    if(!err && data) {
      console.log(data);
      defer.resolve(fileName + ' success ');
    }else {
      defer.reject(fileName + ' fail ');
    }
  })
  return defer.promise;
}

Q.all([
    // printFileContent('nosuchfile.txt'),  
    printFileContent('sample01.txt'), 
    printFileContent('sample02.txt'), 
    printFileContent('sample03.txt')])
  .then(function(success) {
    console.log(success);
  });
