import "./AboutcontentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import five from "../assets/five.webp"
import six from "../assets/six.webp"


const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>My name is Olatinwo Omowumi. I have a degree in Animal Science, but unexpectedly developed an interest in technology. My Skillset includes HTML, CSS, Bootstrap, Git, JavaScript and Reactjs.
          <br></br>
          <br></br>
          As a front-end developer, I am eager to break into the tech industry and make a name for myself.
          I have a strong belief in my capabilities and I'm dedicated to putting in the effort required to reach my goals. I am commited to constantly learning and improving to continue to grow professionally. I am enthusiastic about the opportunity to utilize my love for technology to make a positive impact in the industry.
        </p>
        <Link to="/contact"><button className="btn">Contact</button></Link>
      </div>


      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={five} className="img" alt="true" />
            </div>
            <div className="img-stack bottom">
                <img src={six} className="img" alt="true" />
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Aboutcontent
