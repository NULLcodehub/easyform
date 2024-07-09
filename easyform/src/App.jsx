import { Route, Routes } from 'react-router-dom'
import './App.css'


import Login from './components/LginPage/Login'
import HomeLayout from './components/Layouts/HomeLayout'
import Home from './components/Home/Home'

function App() {
 

  return (
    <>
      <Routes>

        <Route path='/' element={<HomeLayout/>} >
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
