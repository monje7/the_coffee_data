import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Muestra from './components/Resultados'
import Dashboard from './components/dashboard'
import Finca from './components/fincas'
import Registrar from './components/fincaRegistrar'
import LoginForm from './components/login'

function App(){
  return(
    <>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
        <Route path='/Muestra' element={<Muestra/>}/>
        <Route path='/finca/listar' element={<Finca/>}/>
        <Route path='/finca/registrar' element={<Registrar/>}/>
        <Route path='/loginfrom'  element={<LoginForm/>}/>
      </Routes>
    </>
  )
}

export default App
