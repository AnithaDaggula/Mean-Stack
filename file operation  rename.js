fs = require('fs');
fs.rename('File2.txt','Newfile2.txt',function(err,data){
if (err) throw err;
else
console.log('sucess');
});