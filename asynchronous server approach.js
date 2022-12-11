const http = require('http')
let i=1
const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end(`Hello ${i++} World`)
})

server.listen(5000,()=>{
    console.log("Server listening on port : 5000")
})