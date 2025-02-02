const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    api_pass:{type:String,unique:true,required:true},
    create_at:{type:Date,default:Date.now}
})

const User=mongoose.model('User',userSchema)

module.exports=User