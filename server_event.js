const http = require('http')

// We can do this
// const sever = http.createServer((req,res)=>{
//     res.end("Welcome")
// })
// Or we can do this

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it/ listen for it/ respond to it
server.on('request',(req,res) =>{
    res.end("Welcome")
})

server.listen(5000)
// Whenever someone enters the website this event will be generated
