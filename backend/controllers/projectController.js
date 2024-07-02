const shortID=require('short-uuid')



const projectController=async (req,res)=>{
    
    const {projectname}=req.body;

    const pass_key=shortID.generate()

    res.send(pass_key)


}

module.exports=projectController