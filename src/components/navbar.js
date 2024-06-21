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
        {/* <div className="logo">Logo</div> */}
        <nav className={`navbar ${menuOpen ? "show" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
          <a href="/skills">Skills</a>
          <a href="projects">Projects</a>
          <a href="/contact">Contact</a>
         
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </header>
    </div>
  );
}

export default NavBar;
