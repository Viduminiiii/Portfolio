import React from "react";
import "./skills.css";
import html from "../../Pics/skills/html.png"
import css from "../../Pics/skills/css.png"
import javascript from "../../Pics/skills/javascript.png"
import reactNative from "../../Pics/skills/React.png";
import nodejs from "../../Pics/skills/nodejs.png"
import java from "../../Pics/skills/java.png"
import python from "../../Pics/skills/python.png"
import sql from "../../Pics/skills/mysql.png"
import express from "../../Pics/skills/expressjs.png"
import mongodb from "../../Pics/skills/mongodb.png"
import figma from "../../Pics/skills/figma.png"

function Skills() {
  return (
    <div className="App">
      <div className="container-skills">
        <div className="details-1">
          <h1 id="topic" style={{color: "#55AD9B" }}>Technical Skills</h1>
          <div className="row-1">
            <div className="img-container">
              <img src={html} alt="HTML" className="img-1"></img>
              <p id="id-html">HTML</p>
            </div>
            <div className="img-container">
              <img src={css} alt="CSS" className="img"></img>
              <p id="id-css">CSS</p>
            </div>
            <div className="img-container">
              <img src={javascript} alt="JavaScript" className="img"></img>
              <p>JavaScript</p>
            </div>
            <div className="img-container">
              <img src={reactNative} alt="React Native" className="img"></img>
              <p>React Native</p>
            </div>
            <div className="img-container">
              <img src={reactNative} alt="React" className="img"></img>
              <p id="id-react">React</p>
            </div>
            <div className="img-container">
              <img src={nodejs} alt="Node JS" className="img"></img>
              <p>Node JS</p>
            </div>
          </div>
          <div className="row-1">
            <div className="img-container">
              <img src={java} alt="Java" className="img-1"></img>
              <p id="id-java">Java</p>
            </div>
            <div className="img-container">
              <img src={python} alt="Python" className="img"></img>
              <p id="id-python">Python</p>
            </div>
            <div className="img-container">
              <img src={sql} alt="SQL" className="img-1"></img>
              <p id="id-sql">SQL</p>
            </div>
            <div className="img-container">
              <img src={express} alt="ExpressJS" className="img"></img>
              <p id="id-php">Express JS</p>
            </div>
            <div className="img-container">
              <img src={mongodb} alt="MongoDB" className="img-1"></img>
              <p>MongoDB</p>
            </div>
            <div className="img-container">
              <img src={figma} alt="Figma" className="img"></img>
              <p id="id-figma">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
