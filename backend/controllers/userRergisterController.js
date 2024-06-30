const express =require('express')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')
const shortID=require('short-uuid')

const User =require('../models/userModel')

const userRegister=async (req,res)=>{
    // res.json('Register working')

    const {username,email,password}=req.body
    console.log(username,email,password)
    
    try{
        if (!username || !email || !password){
           res.json('invalid input')
        }

        const userExit=await User.findOne({email})

        if (userExit){
            res.json('This email already exits')
        }

        const api_pass=shortID.generate()
        const salt= await bcrypt.genSalt(11)
        const hashPass= await bcrypt.hash(password,salt)
        console.log(hashPass)

        const userData=new User({username,email,password:hashPass,api_pass,create_at:Date.now()})
        await userData.save()
        console.log(userData)
        res.json(userData)
        
    }catch(err){
            res.json(err)
        }
}

module.exports=userRegister