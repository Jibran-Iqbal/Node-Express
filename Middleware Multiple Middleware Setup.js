const express=require('express')

const app=express()




const logger = require('./logger')

const authorize = require("./authorize")



//A better way to use the middleware 


app.use([logger,authorize])
// Order matters here also

// Here the order matters app.use should be above the gets 

// We can also filter this to only a certain path or parent path
// 
// app.use('/api',logger)
// 
// So here it only applies to api paths

app.get('/',(req,res)=>{


    res.send("Home")
})




app.get('/about',(req,res)=>{
    res.send("About")
})


app.get('/api/products',(req,res)=>{
    res.send("These are the products")
})



app.get('/api/items',(req,res)=>{
    res.send("These are the items")
})


app.listen(5000,()=>{
    console.log("Server is listening to port 5000")
})