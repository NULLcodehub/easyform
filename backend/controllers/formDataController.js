const FormSubmission=require('../models/formSubmissionModel')
const formDataController=async (req,res)=>{
    try {
        const {projectID}=req.params

        console.log(projectID)
        res.send(projectID)
        
    } catch (error) {
        res.send(error)
    }

}

module.exports = formDataController