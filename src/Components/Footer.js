import "./Styles/FooterStyles.css";
import { FaFile, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import React from "react";
import ThreeBackground from "./ThreeBackground";

const Footer = () => {
  return (
    <div className="footer">
      <ThreeBackground />
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
              +2348165468022, +2347054117167
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
           <p> Hi there! I'm a tech enthusiast with a strong focus on front-end development. My technical skills include HTML, CSS, Tailwind, JavaScript, React and Wordpress.
            <br/>
            <br/>
            Please feel free to check out my social media profiles and resume by clicking on the icons below.
           </p>
           <div className="social">
           <a href="https://www.linkedin.com/in/mowumi-latinwo" >
            <FaLinkedin
             className="social_icons"
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://github.com/Marwumi/">
            <FaGithub
             className="social_icons"
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://drive.google.com/file/d/132oK7mg5xzNnhdAEL409LNdaPw9R6wHY/view?usp=sharing">
            <FaFile
             className="social_icons"
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com/marwumi">
            <FaTwitter
             className="social_icons"
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
