import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Muestra from './components/Resultados'
import Dashboard from './components/dashboard'
import LoginForm from './components/login'

function App(){
  return(
    <>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
        <Route path='/Muestra' element={<Muestra/>}/>
        <Route path='/loginfrom'  element={<LoginForm/>}/>
      </Routes>
    </>
  )
}

export default App
