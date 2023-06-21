import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Single from './pages/Single';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/about' element={<About />}/> 
        <Route path='/contact' element={<Contact />}/>
        <Route path='/single' element={<Single />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
   
    
   
  )
}

export default App
