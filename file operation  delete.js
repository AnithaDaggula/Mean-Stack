fs = require('fs');
fs.unlink('File4.txt',function(err,data){
if (err) throw err;
else
console.log('sucess');
});
