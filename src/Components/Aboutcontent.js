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
        <p>Hi there! My name is Olatinwo Omowumi, and I'm excited to share my journey of unexpected discovery in the world of software development. Despite my background in Animal Science, my love for learning and exploration led me to acquire technical skills in this exciting field.
          <br></br>
          <br></br>
          As a self-motivated and enthusiastic learner, I'm constantly seeking opportunities to enhance my technical proficiency and contribute to innovative projects. With a strong foundation in web development, I'm eager to collaborate with like-minded professionals and create cutting-edge solutions that positively impact the world.
          Thank you for taking the time to visit my portfolio, and please don't hesitate to reach out to me for inquiries or potential collaborations.
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
