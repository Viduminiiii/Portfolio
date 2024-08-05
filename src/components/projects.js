import React from "react";
import "./projects.css";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import petmateapp1 from "../Pics/Projects/petmate-1.png";
import petmateapp2 from "../Pics/Projects/petmate-2.png";
import petmateapp3 from "../Pics/Projects/petmate-3.png";
import petmatewebsite from "../Pics/Projects/petmate-website.png";
import portfolio from "../Pics/Projects/portfolio.png";
import shoppingsys from "../Pics/Projects/shppoingmanagement.png";
import theatrebooking from "../Pics/Projects/theatre-booking.png";
import sportbuzz from "../Pics/Projects/sportbuzz.png";
import universitysys from "../Pics/Projects/university-grading.png"
import html from "../Pics/skills/html.png";
import css from "../Pics/skills/css.png";
import javascript from "../Pics/skills/javascript.png";
import reactNative from "../Pics/skills/React.png";
import react from "../Pics/skills/React.png"
import nodejs from "../Pics/skills/nodejs.png";
import java from "../Pics/skills/java.png";
import python from "../Pics/skills/python.png";
import expressjs from "../Pics/skills/expressjs.png";
import mongodb from "../Pics/Icons/mongodb-icon.png";
import git from "../Pics/github.png";

function Projects() {
  return (
    <div className="container-projects">
      <div className="details-2">
        <div className="projects-1">
          <div className="project">
            <div className="images">
              <img
                src={petmateapp1}
                alt="Start up page"
                className="img-petmate"
              ></img>
              <img
                src={petmateapp2}
                alt="Sign up category page"
                className="img-petmate"
              ></img>
              <img
                src={petmateapp3}
                alt="Login page"
                className="img-petmate"
              ></img>
            </div>
            <div className="descrip">
              <h1>PetMate</h1>
              <p>
                Petmate is a pet management mobile app made with React Native,
                JavaScript and Node JS
              </p>
            </div>
            <div className="skills">
              <img src={reactNative} alt="React Native" className="icon-img"></img>
              <img src={nodejs} alt="Node JS" className="icon-img"></img>
              <img src={expressjs} alt="Express JS" className="icon-img"></img>
              <img src={mongodb} alt="Mongo DB" className="icon-img"></img>
              <img src={git} alt="Git hub" className="icon-img"></img>
              <div className="next">
                <p id="skills-text">Learn more</p>
                <MoreHorizSharpIcon
                  style={{ fontSize: "2rem", margin: "0.4rem" }} id="icon"
                />
              </div>
            </div>
          </div>
          <div className="project">
            <div className="images">
              <img
                src={petmatewebsite}
                alt="PetMate website"
                className="img-webpetmate"
              ></img>
            </div>
            <div className="descrip">
              <h1>PetMate Website</h1>
              <p>
                Petmate website is an advertising website made with HTML and CSS
              </p>
            </div>
            <div className="skills">
              <img src={html} alt="HTML" className="icon-img"></img>
              <img src={css} alt="CSS" className="icon-img"></img>
              <div className="next">
                <p id="skills-text">Learn more</p>
                <MoreHorizSharpIcon
                  style={{ fontSize: "2rem", margin: "0.4rem" }} id="icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="projects-1">
        <div className="project">
            <div className="images">
              <img
                src={portfolio}
                alt="My portfolio"
                className="img-webpetmate"
              ></img>
            </div>
            <div className="descrip">
              <h1>Portfolio</h1>
              <p>Portfolio made with React</p>
            </div>
            <div className="skills">
              <img src={react} alt="React" className="icon-react"></img>
              <img src={git} alt="Git hub" className="icon-img"></img>
              <div className="next">
                <p id="skills-text">Learn more</p>
                <MoreHorizSharpIcon
                  style={{ fontSize: "2rem", margin: "0.4rem" }} id="icon"
                />
              </div>
            </div>
          </div>
          <div className="project">
            <div className="images">
              <img
                src={shoppingsys}
                alt="Shopping management system"
                className="img-webpetmate"
              ></img>
            </div>
            <div className="descrip">
              <h1>Shopping Management System</h1>
              <p>Shopping Management System made with Java and Java Swing</p>
            </div>
            <div className="skills">
              <img src={java} alt="Java" className="icon-java"></img>
              <div className="next">
                <p id="skills-text">Learn more</p>
                <MoreHorizSharpIcon
                  style={{ fontSize: "2rem", margin: "0.4rem" }} id="icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="projects-1">
        <div className="project">
            <div className="images">
              <img
                src={theatrebooking}
                alt="Theatre booking system"
                className="img-webpetmate"
              ></img>
            </div>
            <div className="descrip">
              <h1>Theatre Ticket Booking System</h1>
              <p>
                Theatre Ticket Booking System made with Java using OOP concepts
              </p>
            </div>
            <div className="skills">
              <img src={java} alt="Java" className="icon-java"></img>
              <div className="next">
                <p id="skills-text">Learn more</p>
                <MoreHorizSharpIcon
                  style={{ fontSize: "2rem", margin: "0.4rem" }} id="icon"
                />
              </div>
            </div>
          </div>
          <div className="project">
            <div className="images">
              <img
                src={sportbuzz}
                alt="Shopping management system"
                className="img-webpetmate"
              ></img>
            </div>
            <div className="descrip">
              <h1>SportBuzz</h1>
              <p>Sports website made with HTML, CSS and JavaScript</p>
            </div>
            <div className="skills">
              <img src={html} alt="HTML" className="icon-img"></img>
              <img src={css} alt="CSS" className="icon-img"></img>
              <img src={javascript} alt="JavScript" className="icon-img"></img>
              <div className="next">
                <p id="skills-text">Learn more</p>
                <MoreHorizSharpIcon
                  style={{ fontSize: "2rem", margin: "0.4rem" }} id="icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="projects-1">
        <div className="project">
            <div className="images">
              <img
                src={universitysys}
                alt="University Grading System"
                className="img-webpetmate"
              ></img>
            </div>
            <div className="descrip">
              <h1>University Grading System</h1>
              <p>
                University Grading System made with Python
              </p>
            </div>
            <div className="skills">
              <img src={python} alt="Python" className="icon-img"></img>
              <div className="next">
                <p id="skills-text">Learn more</p>
                <MoreHorizSharpIcon
                  style={{ fontSize: "2rem", margin: "0.4rem" }} id="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
