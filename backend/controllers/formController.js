const Project=require('../models/projectModel')

const formControl=async (req,res)=>{
    // res.json("from formcontroler")

    const {formData}=req.body;
    const {project_id,form_api_key}=req.params


    try {

        const projectData=await Project.findById(project_id)

        res.send(projectData)
        
    } catch (error) {
        
    }


    // console.log(form_api_key)
    // console.log(project_id)
    // res.send(formData)


}

module.exports=formControl