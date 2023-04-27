import "./FooterStyles.css";
import { FaFile, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Ibadan, Oyo State.</p>
              <p>Nigeria.</p>
            </div>
          </div>
          <div className="Phone">
            <h4>
              <FaPhone
              href="https://marwumi@twitter.com"
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +2348165468022, +2347088805643
            </h4>
          </div>
          <div className="Email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mowumiolatinwo@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
           <p> I am a tech enthusiast with a focus on front-end development. I am highly motivated to secure a junior developer position at a tech company, where i can gain practical experience and improve my skills by actively participating in projects and tasks.
            <br></br>
            Below are the icons that link to my social media profiles and resume.
           </p>
           <div className="social">
           <a href="https://www.linkedin.com/in/mowumi-latinwo">
            <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://github.com/Marwumi/">
            <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://drive.google.com/file/d/1Goh1ZF2SWXXzyXo4iWKYcVUyBwoFRq8W/view?usp=sharing">
            <FaFile
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com/marwumi">
            <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

           </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
