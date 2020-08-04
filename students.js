const express = require('express');
const router=express.Router();
const Alien = require('../models/student');
const student = require('../models/student');
router.get('/api/students', async(req,res)=>{
        try{
            const aliens = await Alien.find()
            res.json(aliens)
        }catch(err){
            res.send('Error '+err)
        }
});
router.get('/api/student/:id', async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error '+err)
    }
});
router.post('/api/students',async(req,res)=>{
    const alien = new Alien({
        name: req.body.name,
        dept: req.body.dept,
        college: req.body.college,
        year : req.body.year
    })
    try{
        const a1=await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
});
router.patch('/api/student/:id', async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.year=req.body.year
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error '+err)
    }
});
router.delete('/api/student/:id', async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        const a1 = await alien.remove()
        res.json(a1)
    }catch(err){
        res.send('Error '+err)
    }
});

module.exports = router
