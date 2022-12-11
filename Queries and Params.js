const express = require('express')

const app=express();


const {products}=require('./data')


app.get('/',(req,res)=>{
    // res.json([{name:'john'},{name:'susan'}])
    // res.json(products)
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image}
    })
    res.json(newProducts)
})


// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product)=>product.id===1)
//     res.json(singleProduct)
// })


// The above approach takes too long to get coded

app.get('/api/products/:pID',(req,res)=>{
    // console.log(req)
    console.log(req.params)
    const {pID}=req.params
    console.log(pID)
    const singleProduct = products.find((product)=>product.id===Number(pID))
    if(!singleProduct)
    {
        return res.status(404).send("Product does not exist")
    }
    res.json(singleProduct)
})



app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {search,limit}=req.query
    let sortedProducts=[...products]
    if(search)
    {
        sortedProducts=sortedProducts.filter((products)=>{
            return products.name.startsWith(search)
        })
    }
    if(limit)
    {
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1)
    {
        // res.status(200).send("No Products Matched Your Search")
        // 
        // We can send this or we can also send this

        return res.status(200).json({success:true,data:[]})


    }
    res.status(200).json(sortedProducts)
    // res.send("Hello World")
    
})



app.listen(5000,()=>{
    console.log("Server is listening on port 5000.......")
})