fs = require('fs');
fs.appendFile('file.txt', 'Hello content!', function (err,data) {
  if (err) throw err;
else
  console.log('ssssuccccc');
}); 