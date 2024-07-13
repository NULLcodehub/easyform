import { Route, Routes } from 'react-router-dom'
import './App.css'

import UserLayout from './components/Layouts/UserLayout'

import Login from './components/LginPage/Login'
import Signup from './components/SignupPage/Signup'
import HomeLayout from './components/Layouts/HomeLayout'
import Home from './components/Home/Home'

import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'


function App() {

  const {isAuth,tokenData}=useContext(AuthContext)
 
  // console.log(tokenData)
  
  return (
    <>
      <Routes>
      
        <Route path='/' element={<HomeLayout/>} >
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>        
      
        <Route path='/user/:userID' element={<UserLayout/>}>
          

        </Route>
      

      </Routes>
    </>
  )
}

export default App
