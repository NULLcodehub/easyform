const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const shortID=require('short-uuid')

const User =require('../models/userModel')
const token=require('../auth/token')

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
        }else{

            const api_pass=shortID.generate()
            const salt= await bcrypt.genSalt(11)
            const hashPass= await bcrypt.hash(password,salt)
            console.log(hashPass)

            const userData=new User({username,email,password:hashPass,api_pass,create_at:Date.now()})
            await userData.save()
            console.log(userData)
            res.json({userData,token:token(userData._id,userData.username,userData.email)})
        }
        
    }catch(err){
            res.json(err)
        }
}



module.exports= userRegister