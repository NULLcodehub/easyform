import { Route, Routes } from 'react-router-dom'
import './App.css'

import UserLayout from './components/Layouts/UserLayout'

import Login from './components/LginPage/Login'
import Signup from './components/SignupPage/Signup'
import HomeLayout from './components/Layouts/HomeLayout'
import Home from './components/Home/Home'

function App() {
 

  return (
    <>
      <Routes>

        <Route path='/' element={<HomeLayout/>} >
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>

        <Route path='/user' element={<UserLayout/>}>

        </Route>

      </Routes>
    </>
  )
}

export default App
