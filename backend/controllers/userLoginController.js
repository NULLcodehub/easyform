const express =require('express')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')


const userLogin=async (req,res)=>{
    res.json('Login working')
}

module.exports=userLogin