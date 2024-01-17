import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forgotpage from './Componentpage/Forgotpage';
import Registerpage from './Componentpage/Registerpage';
import Loginpage from './Componentpage/Loginpage';
import Resetpage from './Componentpage/Resetpage';
import Homepage from './Componentpage/Homepage';
import Asidebar from './Componentpage/Asidebar';

import Home from './Componentpage/Home';
import Error404page from './Componentpage/Error404page';
import Footer from './Componentpage/Footer';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registerpage />} />
       
          <Route path='/home' element={<Homepage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/reset' element={<Resetpage />} />
          <Route path='/forgot' element={<Forgotpage />} />

          <Route path='/asidebar' element={<Asidebar />} />
          <Route path='/homepage' element={<Home />} />
          <Route path='/error' element={<Error404page/>} />
          <Route path='/footer' element={<Footer/>}/>
      
        </Routes>

      </BrowserRouter>
    </>

  )
}
