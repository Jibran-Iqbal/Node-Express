
const http = require('http')
// The below function creates a server and the call back function will be invoked everytime the user hits the server

const {readFileSync}=require('fs')

// get all files
const homePage = readFileSync("./index.html")

const server= http.createServer((req,res)=>{
    console.log('user hit the server')
    res.writeHead(200,{"content-type":"text/html"})
    // text/plain is normal text
    // text/html is html tags related   
    res.write("<h1>This is the head</h1>")
    
    
    
    // console.log(req.method)
    // To check what the user is trying to do
    // console.log(req.url)
    // The check the url the user is trying to access like '/about'
    
    const url=req.url
    if(url=='/')
    {
        // res.write("<h2>This is the home page</h2>")
        res.write(homePage)
    }
    else if(url=='/about')
    res.write("<h2>This is the about page</h2>")
    else
    {
        res.writeHead(404,{"content-type":"text/html"})
        res.write("<b>This page does not exist</b>")
    }
    res.end("")
})

// Refer mozilla doc for status codes   
// And also for mime types that is text/html or text/plain etc


server.listen(5000)
// There are different ports for different jobs like 443 for secure communication


// Node video check http app example
// https://youtu.be/Oe421EPjeBE?t=16640
