const Project=require('../models/projectModel')
const FormSubmission=require('../models/formSubmissionModel')
const sendEmail=require('../mail')






const formControl=async (req,res)=>{
    // res.json("from formcontroler")

    const {formData}=req.body;
    const {project_id_user,form_api_key_url}=req.params
    // console.log(formData)

    try {

        const {_id,form_api_key}=await Project.findById(project_id_user)

        if (!_id){
            res.send('invalid id')
        }else{
            
            if(form_api_key === form_api_key_url){
                // console.log('api key')

                const submmitOk=await FormSubmission.findOne({project_id:_id})
                // console.log(submmitOk)
                if(submmitOk){
                    submmitOk.form_data.push(formData)
                    
                    await submmitOk.save()
                    const data= await submmitOk.form_data.at(-1)
                    sendEmail('souravsaha.prgmr@gmail.com',data)
                    console.log(submmitOk.form_data.at(-1))
                    res.send(submmitOk)
                }
                
            }else{
                res.send('api key did not match')
            }
          
             
        

        }
        
        
    } catch (error) {
        res.send(error)
        
    }



}

module.exports=formControl