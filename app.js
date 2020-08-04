const express = require('express');
const mongoose = require('mongoose');
const url='mongodb://localhost/CourseDBex'
const app=express();
mongoose.connect(url,{useNewUrlParser:true})
const con= mongoose.connection
con.on('open',()=>{
    console.log('connected...')
})
app.use(express.json())
const alienRouter = require('./routes/courses')
const aRouter=require('./routes/students')
app.use('/courses',alienRouter)
app.use('/students',aRouter)
app.listen(9087,()=>{
    console.log('server is started');
});
