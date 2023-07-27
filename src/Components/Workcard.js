import "./Styles/WorkcardStyles.css";

import React from "react";
//This is projectdata card for the homepagee project
const Workcard = (props) => {
  return (
    <div
      className="project-card hero-content"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ position: "relative" }}
    >
      <img src={props.imgsrc} alt="img" className="img"/>
      {/* <h2 className="project-title">{props.title}</h2> */}
      <div className="pro-details">
        {/* <p>{props.text}</p> */}
        <div className="pro-btns">
          <a
            href={props.viewlink}
            className="btn--project mt-auto"
            style={{ position: "absolute", bottom: "10px" }}
          >
            {props.title}
          </a>
          {/* <a href={props.sourcelink} className="btn mt-auto"  style={{position: "absolute", bottom: "10px", right: "16px"}}>{props.source}</a> */}
        </div>
      </div>
    </div>
  );
};

export default Workcard;
