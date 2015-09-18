var fs = require('fs');

//Pyramid of doom in async programming
fs.readFile('sample01.txt', 'utf8', function (err, data) {
  console.log(data);
  fs.readFile('sample02.txt', 'utf8', function (err,data) {
    console.log(data);
    fs.readFile('sample03.txt', 'utf8', function (err,data) {
      console.log(data);
    });
  });
});
