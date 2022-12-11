const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    // When using a middleware we must pass it onto the next middleware unless we are completing the whole cycle by sending a response

    // res.send("Testing")
    next()
}

module.exports = logger