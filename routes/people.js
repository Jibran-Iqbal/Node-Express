const express = require('express')
const router = express.Router();

let {people}=require('../data')

router.get('/',(req,res)=>{
    // res.status(200).json(people)
    res.status(200).json({
        success:true,
        data:people
    })
})

// In get we are reading data
// In post we are adding data

router.post('/',(req,res)=>{
    const {name}=req.body
    if(!name)
    {
        return res.status(400).json({success:false,msg:"Please provide name value"})
    }
    res.status(201).json({success:true,data:[...people,name]})
})

router.post('/postman',(req,res)=>{
    const {name}=req.body
    if(!name)
    {
        return res.status(400).json({success:false,msg:"Please provide name value"})
    }
    res.status(201).json({success:true,person:name})
})




router.put('/:id',(req,res)=>{
    const {name}=req.body
    const {id}=req.params
    // console.log(name,id)
    // res.send("Hello World")
    const person=people.find((person)=>person.id===Number(id))
    // console.log(person)
    if(!person)
    {
        return res.status(404).json({success:false,msg:`No person with id=${id}`})
    }
    const newPeople=  people.map((person) =>{
        if(person.id===Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople})
})


//**************
// let nnn="susan"
// people.map((nnn)=>{
//     if(nnn.id===3)
//         console.log("Yesssss")
//     else
//         console.log("Nooooo")
// })
//**************






router.delete('/:id',(req,res)=>{
    const person=people.find((person)=>person.id===Number(req.params.id))
    // console.log(person)
    if(!person)
    {
        return res.status(404).json({success:false,msg:`No person with id=${req.params.id}`})
    }
    const newPeople=people.filter((person)=>person.id!==Number(req.params.id))
    return res.status(200).json({success:true,data:newPeople})
})


module.exports=router