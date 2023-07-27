import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'
import Footer from '../Components/Footer'
// import Newpro from '../Components/Newwork'
// import Newwork from '../Components/Newwork'
import Projectcardall from '../Components/Projectcardall'
// import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
     <Navbar /> 
     <Heroimg2 heading="PROJECTS." text="Some of my most recent works" />
     {/* <Work /> */}
     <Projectcardall />
      <Footer />
    </div>
  )
}

export default Project
