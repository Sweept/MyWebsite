import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { NavItems } from "./NavItems";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // This code adds the showButton function whenever the screen resizes
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Emerson Sridhar</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? `fas fa-times-circle` : `fas fa-bars`} />
      </div>
      <div className="navbar-container">
        <ul className={click ? `nav-menu active` : `nav-menu`}>
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon} {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
