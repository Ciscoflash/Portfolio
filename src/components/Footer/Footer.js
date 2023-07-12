import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="Footer">
      <h1>Abraham</h1>

      <div>
        <p>About</p>
        <p>Project</p>
        <p>Service</p>
      </div>

      <div>
        <FaFacebook size={27} />
        <BsInstagram size={27} />
        <AiFillTwitterCircle size={30} />
      </div>

      <div className="copy">
        &copy; Copyright 2023, Designed by Abraham Jude. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
