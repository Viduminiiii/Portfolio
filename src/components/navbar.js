import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="logo">
          <h3 style={{fontSize:"1.5rem", margin:"1rem"}}>Vidumini</h3>
        </div> */}
        <nav className={`navbar ${menuOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </header>
    </div>
  );
}

export default NavBar;
