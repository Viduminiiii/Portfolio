import React from "react";
import "../about/about.css";
import "../skills/skills.css";
import About from "../about/about";
import Skills from "../skills/skills";

function AboutMe() {
  return (
    <div>
      <div className="tab-content">
        <About />
        <br/>
        <Skills />
      </div>
    </div>
  );
}

export default AboutMe;
