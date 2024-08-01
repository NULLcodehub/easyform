const Project=require('../models/projectModel')
const FormSubmission=require('../models/formSubmissionModel')

const deletProject=async (req,res)=>{

    const {projectID}=req.params
    try {

        if(projectID){
            const deleteForm=await FormSubmission.deleteOne({project_id:projectID})
            if(deleteForm){
                const deleteProject=await Project.findByIdAndDelete(projectID)
                if (deleteProject){
                    res.send("Project Deleted")
                }else{
                    res.send('somthing went Wrong. Try again')
                }
                
            }else{
                res.send('somthing went Wrong. Try again')
            }
        }else{
            res.send('somthing went Wrong. Try again')
        }


        
    } catch (error) {
        res.send(error)
        
    }


}
module.exports=deletProject