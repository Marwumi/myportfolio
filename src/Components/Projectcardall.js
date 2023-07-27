import React from "react";
import "./Styles/Projectcardallstyle.css";
import Projectcard from "./Projectcard";
import Workcarddata from "./Workcarddata";
import ParticleBackgroundWrapper from "./ParticleBackground";

const Projectcardall = () => {
  return (
    <>
      <ParticleBackgroundWrapper />
      <div className="work-containera particle">
        <div id="particles-container"></div>
        {/* <h1 className="project-headinga">Projects</h1> */}
        <div className="project-containera">
          {Workcarddata.map((val, ind) => {
            return (
              <Projectcard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                viewlink={val.viewlink}
                source={val.source}
                sourcelink={val.sourcelink}
                stack={val.stack}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projectcardall;
