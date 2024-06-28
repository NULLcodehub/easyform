require("dotenv").config()
const express=require("express")
const bodyParser=require('body-parser')
const cors=require('cors')


const app=express()

app.use(bodyParser.json())
app.use(cors())

const PORT= process.env.PORT


app.get('/',(req,res)=>{
    res.send('server working')
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})


