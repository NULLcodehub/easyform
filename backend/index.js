require("dotenv").config()
const express=require("express")
const bodyParser=require('body-parser')
const cors=require('cors')
const connectDB=require('./db')

const userLogin=require('./controllers/userLoginController')
const userRegister=require('./controllers/userRergisterController')
const formControl=require('./controllers/formController')
const projectController=require('./controllers/projectController')
const projectDataController=require('./controllers/projectDataController')
const formDataController=require('./controllers/formDataController')
const deletProject =require('./controllers/deleteProject')
const app=express()

connectDB()

app.use(bodyParser.json())
app.use(cors())

const PORT= process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send('server working')
})


app.post('/register',userRegister)

app.post('/login',userLogin)

app.post('/create/project',projectController)

app.post('/:project_id_user/form/:form_api_key_url',formControl)

app.get('/projects/:userID',projectDataController)

app.get('/form/:projectID',formDataController)
app.delete('/:projectID',deletProject)

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})


