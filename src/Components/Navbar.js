import "./Styles/NavbarStyles.css"
import React, { useState } from 'react'
import { Link} from "react-router-dom"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);


const[color, setColor] = useState(false);
const changeColor = () => {
  if(window.scrollY >=100){
    setColor(true);
  } else {
    setColor(false)
  }
};
   window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
     <Link to="/">
      <h2>&lt;Dev Mo/&gt;</h2>
     </Link>
     <ul className= {click ? "nav-menu active" : "nav-menu"} style={{textDecoration: "none"}}>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/project">Project</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
     </ul>
    
     <div className="hamburger" onClick =  {handleClick}>
      {click ? (<FaTimes size={20} style={{color:"#fff"}} className="mobile--menu"/>
      ): (
      <FaBars size={20} style={{color:"#fff"}} className="mobile--menu"/>)
}
     </div>
    </div>
  )
}

export default Navbar
