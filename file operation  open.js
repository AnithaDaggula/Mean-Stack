fs = require('fs');
fs.open('File4.txt','r+',function(err,data){
fs.writeFile('File4.txt',"hi",function(err,data){
if(err) throw err;
console.log('sucess');
});
fs.readFile('File4.txt','utf8',function(err,data){
 if (err) throw err;
else
  console.log(data);
}); 
});
