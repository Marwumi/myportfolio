import React from 'react'
// import './Contact.css';  // Styles for this page only! Importing it here will not

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
// import Form from '../Components/Form'


import Formtwo from '../Components/Formtwo'

const Contact = () => {
  return (
    <div>
{/* <ParticleBackground /> */}
      <Navbar /> 
      <Heroimg2 heading="" text="Kindly fill the form below to get in touch with me."/>
      {/* <Form /> */}
      <Formtwo />
      <Footer />
    </div>
  )
}

export default Contact
