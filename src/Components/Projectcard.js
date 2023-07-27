import "./Styles/Projectcardstyle.css";

import React from "react";

const Projectcard = (props) => {
  return (
    <div
      className="project-cardd hero-content"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div>
        <img src={props.imgsrc} alt="img" className="project-cardd-img" />
      </div>
      <div className="project-cardd-details">
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="stack">
            {props.stack.map((item, index) => (
              <button key={index}>{item}</button>
            ))}
          </div>

          <div className="pro-btns">
            <a
              href={props.viewlink}
              className="btn mt-auto view--project"
              target="blank"
            >
              {props.view}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
