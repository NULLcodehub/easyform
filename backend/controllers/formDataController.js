const FormSubmission=require('../models/formSubmissionModel')
const formDataController=async (req,res)=>{
    try {
        const {projectID}=req.params

        if(projectID){
            const formData=await FormSubmission.find({project_id:projectID})
            res.send(formData)
        }
        else{
            res.send("No data found from this project")
        }
       
        
    } catch (error) {
        res.send(error)
    }

}

module.exports = formDataController