const Project=require('../models/projectModel')
const projectData=async (req,res)=>{
    const {userID}=req.params
    try {

        if(userID){

            const projectData=await Project.find({user_id:userID})
            // console.log(projectData)
            res.send(projectData)


        }else{
            res.send('project not found on this user id')
        }

        


        
    } catch (error) {
        res.send(error)
    }
}

module.exports= projectData