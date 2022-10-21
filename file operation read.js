fs = require('fs');
fs.readFile('file1.txt', 'utf8', function (err,data) {
  if (err) throw err;
else
  console.log(data);
}); 