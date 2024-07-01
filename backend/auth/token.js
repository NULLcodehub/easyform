const jwt=require('jsonwebtoken')

const token =(id,username,email)=>{
    return jwt.sign({id,username,email},process.env.JWT_KEY,{expiresIn:'2h'})
}

module.exports=token