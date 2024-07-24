const h = require('http')
//console.log(h)


h.createServer(function(req,res){
    res.write('Welcome Node Js shiva singh sengar')
    res.end()
}).listen(3000,()=>console.log("Server start localhost:3000"))


//listen ka kam server ko chalana hota hai