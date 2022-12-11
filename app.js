const express = require('express')

const app= express()

const people=require('./routes/people')
const auth=require('./routes/auth')

// Static assets
app.use(express.static('./methods-public'))


// parse from data
app.use(express.urlencoded({extended:false}))
console.log(people)

// parse json
app.use(express.json())

app.use('/api/people',people)
app.use('/login',auth)


// app.post('/login',(req,res)=>{
//     console.log(req.body)
//     const {testing} = req.body
//     const name=testing //or we can go to index.html and change the identfier from testing to name
//     if(name)
//     {
//         return res.status(200).send(`Welcome ${name}`)
//     }
//     res.status(401).send("Provide Credentials")
//     console.log(name)
//     // res.send("POST")
// })




// app.get('/api/people',(req,res)=>{
//     // res.status(200).json(people)
//     res.status(200).json({
//         success:true,
//         data:people
//     })
// })

// // In get we are reading data
// // In post we are adding data
// app.post('/api/people/postman',(req,res)=>{
//     const {name}=req.body
//     if(!name)
//     {
//         return res.status(400).json({success:false,msg:"Please provide name value"})
//     }
//     res.status(201).json({success:true,person:name})
// })



// app.post('/api/people',(req,res)=>{
//     const {name}=req.body
//     if(!name)
//     {
//         return res.status(400).json({success:false,msg:"Please provide name value"})
//     }
//     res.status(201).json({success:true,data:[...people,name]})
// })

// app.put('/api/people/:id',(req,res)=>{
//     const {name}=req.body
//     const {id}=req.params
//     // console.log(name,id)
//     // res.send("Hello World")
//     const person=people.find((person)=>person.id===Number(id))
//     // console.log(person)
//     if(!person)
//     {
//         return res.status(404).json({success:false,msg:`No person with id=${id}`})
//     }
//     const newPeople=  people.map((person) =>{
//         if(person.id===Number(id)){
//             person.name = name
//         }
//         return person
//     })
//     res.status(200).json({success:true,data:newPeople})
// })


// //**************
// // let nnn="susan"
// // people.map((nnn)=>{
// //     if(nnn.id===3)
// //         console.log("Yesssss")
// //     else
// //         console.log("Nooooo")
// // })
// //**************






// app.delete('/api/people/:id',(req,res)=>{
//     const person=people.find((person)=>person.id===Number(req.params.id))
//     // console.log(person)
//     if(!person)
//     {
//         return res.status(404).json({success:false,msg:`No person with id=${req.params.id}`})
//     }
//     const newPeople=people.filter((person)=>person.id!==Number(req.params.id))
//     return res.status(200).json({success:true,data:newPeople})
// })



app.listen(5000,()=>{
    console.log("Listening to 5000 here")
})