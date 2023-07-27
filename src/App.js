import React, { useEffect } from 'react';
import './index.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file

import { Route, Routes } from 'react-router-dom';
import Mainlayout from './Components/Mainlayout';
// import ParticleBackground from './Components/ParticleBackground';

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library on component mount
  }, []);
  return (
    <>
    {/* <ParticleBackground /> */}
    <Mainlayout>
    <Routes>
     
      
        <Route path='/' element={ <Home />} />
        <Route path='/project' element={ <Project />} />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
          
      
    </Routes>
    </Mainlayout>
    </>
  )
}

export default App;
