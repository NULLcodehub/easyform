const express =require('express')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User=require('../models/userModel')
const token=require('../auth/token')
const { json } = require('body-parser')

const userLogin=async (req,res)=>{
    const {email,password}=req.body;
    // console.log(email,password)

    try{
        
        if (!email || !password){
            res.json('invalid input')
        }else{

            const userOk= await User.findOne({email})

            if(!userOk){
                res.status(400).send('email does not exists')
            }else{
                const passOk =await bcrypt.compare(password,userOk.password)
                
                if (!passOk){
                    res.status(400).send('wrong password')
                }else{
                    res.send({token:token(userOk._id,userOk.username,userOk.email)})
                }
                
            }

        }

    }catch(err){
        res.status(400).json(err)
    }
}

module.exports=userLogin