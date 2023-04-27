import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import Aboutcontent from '../Components/Aboutcontent'

const About = () => {
  return (
    <div>
      <Navbar /> 
      <Heroimg2 heading="About Me." text="I write codes and I love what I do."/>
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default About
