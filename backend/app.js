const mongoose=require('mongoose')
const express=require('express')
const schema=require('./modules/schema')
const cors=require('cors')
// const { find } = require('./modules/schema')
const url='mongodb://localhost:27017/todo'
const app=express()
app.use(express.json())
app.use(cors())
mongoose.set({strictQuery:true})

mongoose.connect(url,(err)=>{
    if(err){
        console.log(err);
        console.log('error');
    }else{
        console.log('connect to db')
    }
})

app.post ('/',async(req,res)=>{
    const alien=await new schema({
         name:req.body.name
})
    alien.save()
    console.log('data to posted ');
})
app.get('/',async(req,res)=>{
    const alie=await schema.find()
    res.json(alie)
})
app.get('/:id',async(req,res)=>{
    const alie=await schema.findById(req.params.id)
    res.json(alie)
})
app.delete('/:_id',async(req,res)=>{
      await schema.findByIdAndDelete(req.params._id)
     res.json('deleted succesfully')
}) 
app.put('/:_id',async(req,res)=>{
    const data= await schema.findByIdAndUpdate(req.params._id)
    data.name=req.body.name
    data.save()
    res.json('updated')
}) 



app.listen(8000,()=>{
    console.log('server start from 8000');
})