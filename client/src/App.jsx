import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import './index.css'
import './Componenets/Allstyles.css'
import LandingPage from './Componenets/LandingPage'
import AdminPage from './Componenets/AdminPage'
import Contact from './Componenets/Contact'
import HomePage from './Componenets/HomePage'

function App() {

  return (
  
    <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="admin" element={ <AdminPage/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="store" element={ <HomePage/> } />
    </Routes>
  )
}

export default App
