import React from "react";
import "./about.css";
import "./skills.css";
import About from "./about";
import Skills from "./skills";

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
