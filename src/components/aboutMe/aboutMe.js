import React from "react";
import "../about/about.css";
import "../skills/skills.css";
import About from "../about/about";
import Skills from "../skills/skills";
import Education from "../education/education";

function AboutMe() {
  return (
    <div>
      <div className="tab-content">
        <About />
        <Skills />
        <Education />
      </div>
    </div>
  );
}

export default AboutMe;
