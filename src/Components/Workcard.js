import "./WorkcardStyles.css";

import React from "react";
// import { NavLink } from "react-router-dom";

const Workcard = (props) => {
  return (
    <div className="project-card" style={{position: "relative"}}>
          <img src={props.imgsrc} alt="img" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns" >
                <a href={props.viewlink} className="btn mt-auto" style={{position: "absolute", bottom: "10px"}}>{props.view}</a>
                <a href={props.sourcelink} className="btn mt-auto"  style={{position: "absolute", bottom: "10px", right: "16px"}}>{props.source}</a>
            </div>
          </div>
        </div>
  );
};

export default Workcard;
