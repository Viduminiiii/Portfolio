import React from "react";
import "./education.css";

function Education() {
  return (
    <div className="App">
      <div className="container-edu">
        <div className="edu-details">
          <h1 id="topic" style={{ color: "#55AD9B" }}>
            Education
          </h1>
          <div className="education">
            <div className="edu-1">
              <h2>Informatics Institute of Technology</h2>
              <p>-3rd year Software Engineering undergraduate</p>
              <p>-Achieved an avarage of __ marks for 1st year modules</p>
              <p>-Achieved an avarage of __ marks for 2nd year modules</p>
            </div>
            <br />
            <div className="edu-1">
              <h2>Sujatha Vidyalaya, Nugegoda</h2>
              <p>-GCE Advanced Level in Arts Stream (2019-2022)</p>
              <p>-GCE Ordinary Level (2018)</p>
            </div>
            <br />
            <div className="edu-1">
              <h2>Certifications</h2>
              <p style={{fontWeight:"bold"}}>- Introduction to Web Design and Development</p>
              <p>by Jen Kramer, LinkedIn Learning</p>
              <p style={{fontWeight:"bold"}}>- React Hooks</p>
              <p>by Eve Porcello, LinkedIn Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
