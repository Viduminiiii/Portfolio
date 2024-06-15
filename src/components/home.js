import React from "react";
import NavBar from "./navbar";
import "../components/home.css";
import pic from "../Pics/Pic.jpg";

function Home() {
  const SendMail = ()=>{
    alert('Send mail!')
  }
  
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div>
          <img src={pic} alt="Vidumini Dayananda" className="my-pic"></img>
        </div>
        <div className="text">
          <h2>Hi, I'm Vidumini</h2>
          <p>I am an ambitious undergraduate student pursuing a BEng (Hons) Software Engineering at the University of Westminster, Informatic Institute of Technology (IIT).</p>
          <button className="button" onClick={SendMail}>Contact me</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
