import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Muestra from './components/Resultados'

function App(){
  return(
    <>
      <Routes>
        <Route path='/muestra' element={<Muestra/>}/>
      </Routes>
    </>
  )
}

export default App
