 const f = require('fs')     //fs ka full fom file system hai     //synchronous
// f.readFile(__dirname+"/8hello.txt","utf8",(err,data)=>{
//     if(err) throw(err);
//     console.log(data);
    
// }) ;      

//console.log("shiva ji") 

f.writeFile

const data =f.readFileSync(__dirname+"/8hello.txt","utf-8");       //asynchronous
console.log(data);

console.log("hello gwalior");