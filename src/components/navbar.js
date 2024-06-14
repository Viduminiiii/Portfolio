import React, { useState } from "react";
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
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </header>
    </div>
  );
}

export default NavBar;