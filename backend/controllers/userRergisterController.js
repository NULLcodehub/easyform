const express =require('express')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')


const userRegister=async (req,res)=>{
    res.json('Register working')
}

module.exports=userRegister