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
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
