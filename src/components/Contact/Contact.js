import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Get in tourch</p>

      <div className="divs">
        <div className="left">
          <div>
            <BiLogoGmail size={27} />
            <h2>Gmail</h2>
            <p>abrahamjude1999@gmail.com</p>
          </div>
          <div>
            <ImWhatsapp size={27} />
            <h2>Whatsapp</h2>
            <p>+234 905 5504 7774</p>
          </div>
          <div>
            <BsLinkedin size={27} />
            <h2>Linkedin</h2>
            <p>Abraham Jude</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
