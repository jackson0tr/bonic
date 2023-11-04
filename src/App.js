import React, { useEffect, useState } from 'react';
import './app.css';
import Header from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Details } from './pages/Details';
import Footer from './components/UI/Footer';


function App() {

  const [theme, setTheme] = useState('')
  const toggleTheme = () =>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }
  
  useEffect(() =>{
    document.body.className = theme
  }, [theme])

  


  return (
    <>
      <BrowserRouter>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Routes>
        <Route path='/' element={<Home/>} theme={theme} /> 
          <Route path='/details/:id' element={<Details/>} theme={theme} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
