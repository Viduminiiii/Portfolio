import React from "react";
import "../components/home.css";
import pic from "../Pics/Pic.jpg";
import Button from '@mui/material/Button';

function Home() {
  const SendMail = ()=>{
    alert('Send mail!')
  }
  
  return (
    <div className="App">
      <div className="container-1">
        <div>
          <img src={pic} alt="Vidumini Dayananda" className="my-pic"></img>
        </div>
        <div className="text">
          <h2>Hi, I'm Vidumini</h2>
          <p>I am an ambitious undergraduate student pursuing a BEng (Hons) Software Engineering at the University of Westminster, Informatic Institute of Technology (IIT).</p>
          <Button variant ="contained" className="button" onClick={SendMail}>Contact me</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
