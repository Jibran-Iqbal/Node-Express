const express = require('express')
const router=express.Router()

router.post('/',(req,res)=>{
    console.log(req.body)
    const {testing} = req.body
    const name=testing //or we can go to index.html and change the identfier from testing to name
    if(name)
    {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Provide Credentials")
    console.log(name)
    // res.send("POST")
})

module.exports=router
