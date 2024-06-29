const mongoose=require('mongoose')
const Schema=mongoose.Schema

const formSchema=new Schema({
    project_id:{type:mongoose.Schema.Types.ObjectId,ref:'Project'},
    projectname:{type:String,required:true},
    form_data:{type:Map,of:String,required:true},
    submited_at:{type:Date,default:Date.now}
})

const FormSubmission=mongoose.model('Formsubmission',formSchema)

module.exports=FormSubmission