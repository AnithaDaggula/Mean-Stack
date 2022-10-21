fs = require('fs');
fs.writeFile('File1.txt','Hello',function(err,data){
if(err) throw err;
else
console.log('sucess');
});