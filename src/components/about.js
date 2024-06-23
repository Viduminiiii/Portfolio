import React from "react";
import "./about.css";
import InterestsSharpIcon from "@mui/icons-material/InterestsSharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";

function About() {
  return (
    <div className="App">
      <div className="container">
        <div className="details">
          <h1 id="topic">About Me</h1>
          <div className="container-2">
            <div className="info-1">
              <InterestsSharpIcon style={{ fontSize: "3rem" }} />
              <h1>Eager to Apply Expertise in Practical Projects</h1>
            </div>
            <div className="text">
              <p>
                An ambitious undergraduate software engineering student with a
                strong passion in software development and programming eager to
                apply their expertise in practical projects.
              </p>
            </div>
          </div>
          <div className="container-3">
            <div className="info-1">
              <LanguageSharpIcon style={{ fontSize: "3rem" }} />
              <h1>Fluent in Multiple Programming Languages</h1>
            </div>
            <div className="text">
              <p>
                Gained fluency in HTML, CSS, JS, Python, Java, SQL, React Native
                and React JS through projects.
              </p>
            </div>
          </div>
          <div className="container-4">
            <div className="info-1">
              <GroupsSharpIcon style={{ fontSize: "3rem" }} />
              <h1>Team-Oriented and Challenge-Driven</h1>
            </div>
            <div className="text">
              <p>
                Enjoys working in groups, seeking challenges and is dedicated to
                becoming the best software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
