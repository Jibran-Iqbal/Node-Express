const express=require('express')

const app=express()

// req => middleware => res

const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    // When using a middleware we must pass it onto the next middleware unless we are completing the whole cycle by sending a response

    // res.send("Testing")
    next()
}

app.get('/',logger,(req,res)=>{
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    // console.log(method,url,time)

    // If we want the same functionality in about and other routes 
    // That's when we use middleware named as logger here



    res.send("Home")
})
app.get('/about',logger,(req,res)=>{
    res.send("About")
})

app.listen(5000,()=>{
    console.log("Server is listening to port 5000")
})