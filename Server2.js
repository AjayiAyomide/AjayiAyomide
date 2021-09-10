const http = require('http')
const PORT = 80
const fs = require("fs") 

// http.createServer(('/' ,(req,res) => {
//     //console.log(req.method);
//     //console.log(req.url);
//     res.write('Hello World This is my Assignment')
//     res.end()
// })).listen(PORT, () => console.log(`your server is listen at ${PORT}`))

const myReguestHandler = (req, res) => {
    if (req.url === '/'){
        fs.readFile("new.html",(err, data) => {
            if (err){
                res.writeHead(500, {"Content-Type" : "text/plain"})
                res.write("Error 500 : Internal Server Error")
                res.end()
            }else{
                res.writeHead(500, {"Content-Type" : "text/html"})
                res.write(data)
                res.end()
            }
        })
    }else if (req.url === '/Contact'){
        res.end('Welcome to Contactpage')
    }else{
        res.end('sorry page not find') 
    }
    
}


http.createServer(myReguestHandler)

.listen(PORT, () => console.log(`your server is listen at ${PORT}`))
