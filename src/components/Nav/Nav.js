import React, { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [Name, setName] = useState("Abraham");
  return (
    <div className="const">
      <div className="container">
        <div>
          <p>{Name}</p>
        </div>
        <div>
          <ul>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
