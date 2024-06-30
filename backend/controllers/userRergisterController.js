const express =require('express')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')
const shortID=require('short-uuid')

const User =require('../models/userModel')

const userRegister=async (req,res)=>{
    // res.json('Register working')

    const {username,email,password}=req.body
    console.log(username,email,password)
    // cpnsole
    try{
        if (!username || !email || !passsword){
           res.json('invalid input')
        }

        const api_pass=shortID.generate()
        const userData=new User({username:username,email:email,password:password,api_pass:api_pass,create_at:Date.now()})
        console.log(userData)
        await userData.save()
        res.json(userData)
        
    }catch(err){
            res.json(err)
        }
}

module.exports=userRegister