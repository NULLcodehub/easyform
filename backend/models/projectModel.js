const mongoose=require('mongoose')
const Schema=mongoose.Schema

const projectSchema=new Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    projectname:{type:String,required:true},
    pass_key:{type:String,unique:true,required:true},
    create_at:{type:Date,default:Date.now}
})

const Project=mongoose.model('User',projectSchema)

module.exports=Project