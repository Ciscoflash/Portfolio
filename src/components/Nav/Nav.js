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
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Skills</Link>
            <Link>Services</Link>
            <Link>Portfolio</Link>
            <Link>Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
