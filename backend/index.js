require("dotenv").config()
const express=require("express")
const bodyParser=require('body-parser')
const cors=require('cors')
const connectDB=require('./db')

const userLogin=require('./controllers/userLoginController')
const userRegister=require('./controllers/userRergisterController')
const formControl=require('./controllers/formController')


const app=express()

connectDB()

app.use(bodyParser.json())
app.use(cors())

const PORT= process.env.PORT


app.get('/',(req,res)=>{
    res.send('server working')
})


app.post('/register',userRegister)

app.post('/login',userLogin)

app.post('/project/form',formControl)






app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})


