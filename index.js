const express=require('express')
const products = require('./products')
require('./config')

const Product=require('./products')


const app=express()
app.use(express.json())

app.post('/create',async(req,res)=>{
    let data=new products(req.body)
    let result=await data.save()
    console.log(result)
    res.send('success')
})

app.listen(5000)