import "./HeroimgStyles.css"

import React from 'react'
import IntroImg from "../assets/ace.jpg"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
      <img className="into-img" src={IntroImg} alt="" />
      </div>
      <div className="content">
    <h1>Hey there, I'm Mowumi, a Front-end developer.</h1>
    <div>
        <Link to="/project" className="btn">Project</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
    </div>
      </div>
    </div>
  )
}

export default Heroimg
