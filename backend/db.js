const mongoose=require('mongoose')



const connectDB=async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI)
        console.log('database connedted')

    }catch(err){
        console.log(err)
    }
}

module.exports=connectDB



