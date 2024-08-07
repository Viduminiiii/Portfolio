import React from "react";
import "../home/home.css";
import pic from "../../Pics/Pic.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import git from "../../Pics/github.png";
import linkedin from "../../Pics/linkedin.png";
import gmail from "../../Pics/gmail.png";
import cv from "../../Data/ViduminiDayananda.pdf";

function Home() {
  return (
    <div className="App">
      <div className="container-1">
        <div className="contact-box">
          <a
            href="https://github.com/Viduminiiii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="Git hub" className="icon-img" />
          </a>
          <a
            href="https://www.linkedin.com/in/vidumini-dayananda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="icon-img" />
          </a>
          <Link to="/contact">
            <img src={gmail} alt="Gmail" className="icon-img" />
          </Link>
        </div>
        <div>
          <img src={pic} alt="Vidumini Dayananda" className="my-pic" />
        </div>
        <div className="text">
          <h2>Hi, I'm Vidumini</h2>
          <p>
            I am an ambitious undergraduate student pursuing a BEng (Hons)
            Software Engineering at the University of Westminster, Informatics
            Institute of Technology (IIT).
          </p>
          <Button variant="contained" className="button">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
