const shortID=require('short-uuid')

const Project=require('../models/projectModel')
const FormSubmission=require('../models/formSubmissionModel')

const projectController=async (req,res)=>{
    
    const {projectname,user_id}=req.body;


    try{
        

        if(!projectname){
            res.send("No project name")
        }else{
            const form_api_key=shortID.generate()
            const projectOk=new Project({projectname:projectname,form_api_key:form_api_key,user_id:user_id,create_at:Date.now()})
            
            if(!projectOk){
                res.send('somthing is wrong,try again')
                
            }
            else{
                
                await projectOk.save()
                
                const form=new FormSubmission({project_id:projectOk._id,projectname:projectOk.projectname})
                await form.save()
                res.send(projectOk)
            }
        }



    }catch(err){
        res.send(err)
    }



}

module.exports=projectController