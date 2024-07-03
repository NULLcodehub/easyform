const mongoose=require('mongoose')
const Schema=mongoose.Schema

const projectSchema=new Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    projectname:{type:String,required:true},
    form_api_key:{type:String,unique:true,required:true},
    create_at:{type:Date,default:Date.now}
})

const Project=mongoose.model('Project',projectSchema)

module.exports=Project