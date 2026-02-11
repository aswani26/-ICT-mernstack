import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Data from './components/Data'
import Statebasic from './components/Statebasic'
import Count from './components/Count'
import ThreeName from './components/ThreeName'
import CardGet from './components/CardGet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/table' element={<Data/>}/>
      <Route path='/state' element={<Statebasic/>}/>
      <Route path='/count' element={<Count/>}/>
      <Route path='/name' element={<ThreeName/>}/>
      <Route path='/Card' element={<CardGet/>}/> 
    
    </Routes>
     
    </>
  )
}


export default App
