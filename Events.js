const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on - listen for an event
// emit - emit an event

// Use on to name an event
// Use emit to perform an event

customEmitter.on('response',()=>{
    console.log('data recieved')
})
// We can also do this
customEmitter.on('response',()=>{
    console.log('Some other logic here')
})
// Name of the even is "response"

customEmitter.emit('response')
// Another example
customEmitter.on("response2",(name,id)=>{
    console.log(`Name is ${name} and id is ${id}`)
})
customEmitter.emit("response2","Jibran",35)