import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Muestra from './components/Resultados'
import Dashboard from './components/dashboard'
import Finca from './components/fincas'
import Registrar from './components/fincaRegistrar'
import Analisiss from './components/Analisiss'
import LoginForm from './components/login'
import GuardarResultado from './components/registrarResultados'

function App(){
  return(
    <>
      <Routes>
      <Route path='/dasboard' element={<Dashboard/>}/>
        <Route path='/Resultado' element={<Muestra/>}/>
        <Route path='/resultado/guardar' element={<GuardarResultado/>}/>
        <Route path='/finca/listar' element={<Finca/>}/>
        <Route path='/finca/registrar' element={<Registrar/>}/>
        <Route path='/Analisis' element={<Analisiss/>}/>
        <Route path='/loginfrom'  element={<LoginForm/>}/>
      </Routes>
    </>
  )
}

export default App
